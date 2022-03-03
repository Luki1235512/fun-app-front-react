import heroURL from '../images/characters/people/hero.png'
import npc3URL from '../images/characters/people/npc3.png'
import {Combatant} from "./Combatant";
import Stands from '../content/stands'
import TurnCycle from "./TurnCycle";
import BattleEvent from "./BattleEvent";
import Team from "./Team";
import playerState from "../state/PlayerState";
import Enemies from "../content/enemies";

export class Battle {
    constructor({enemy, onComplete}) {

        // this.enemy = Enemies.julie
        this.enemy = enemy
        this.onComplete = onComplete

        this.combatants =  {
            // "player1": new Combatant({
            //     ...Stands.r001,
            //     team: "player",
            //     hp: 30,
            //     maxHp: 50,
            //     xp: 95,
            //     maxXp: 100,
            //     level: 1,
            //     status: null,
            //     isPlayerControlled: true
            // }, this),
            // "player2": new Combatant({
            //     ...Stands.f001,
            //     team: "player",
            //     hp: 30,
            //     maxHp: 50,
            //     xp: 75,
            //     maxXp: 100,
            //     level: 1,
            //     status: null,
            //     isPlayerControlled: true
            // }, this),
            // "enemy1": new Combatant({
            //     ...Stands.g001,
            //     team: "enemy",
            //     hp: 1,
            //     maxHp: 50,
            //     xp: 20,
            //     maxXp: 100,
            //     level: 1,
            // }, this),
            // "enemy2": new Combatant({
            //     ...Stands.r001,
            //     team: "enemy",
            //     hp: 25,
            //     maxHp: 50,
            //     xp: 30,
            //     maxXp: 100,
            //     level: 1,
            // }, this),
        }

        this.activeCombatants = {
            player: null,
            enemy: null
        }

        playerState.lineup.forEach(id => {
            this.addCombatant(id, "player", playerState.stands[id])
        })

        Object.keys(this.enemy.stands).forEach(key => {
            this.addCombatant("e_" + key, "enemy", this.enemy.stands[key])
        })

        this.items = []

        playerState.items.forEach(item => {
            this.items.push({
                ...item,
                team: "player"
            })
        })

        this.usedInstanceIds = {}
    }

    addCombatant(id, team, config) {
        this.combatants[id] = new Combatant({
            ...Stands[config.standId],
            ...config,
            team,
            isPlayerControlled: team === "player"
        }, this)
        this.activeCombatants[team] = this.activeCombatants[team] || id
    }

    createElement() {
        this.element = document.createElement("div")
        this.element.classList.add("Battle")
        this.element.innerHTML = (`
        <div class="Battle_hero">
            <img src="${heroURL}" alt="Hero">
        </div>
        
        <div class="Battle_enemy">
            <img src="${this.enemy.src}" alt=${this.enemy.src}>
        </div>
        `)
    }

    init(container) {
        this.createElement()
        container.appendChild(this.element)

        this.playerTeam = new Team("player", "Hero")
        this.enemyTeam = new Team("enemy", "George")

        Object.keys(this.combatants).forEach(key => {
            let combatant = this.combatants[key]
            combatant.id = key
            combatant.init(this.element)

            if (combatant.team === "player") {
                this.playerTeam.combatants.push(combatant)
            } else if (combatant.team === "enemy") {
                this.enemyTeam.combatants.push(combatant)
            }
        })

        this.playerTeam.init(this.element)
        this.enemyTeam.init(this.element)

        this.turnCycle = new TurnCycle({
            battle: this,
            onNewEvent: event => {
                return new Promise(resolve => {
                    const battleEvent = new BattleEvent(event, this)
                    battleEvent.init(resolve)
                })
            },
            onWinner: winner => {

                if (winner === "player") {
                    const playerState = window.playerState
                    Object.keys(playerState.stands).forEach(id => {
                        const playerStateStand = playerState.stands[id]
                        const combatant = this.combatants[id]
                        if (combatant) {
                            playerStateStand.hp = combatant.hp
                            playerStateStand.xp = combatant.xp
                            playerStateStand.maxXp = combatant.maxXp
                            playerStateStand.level = combatant.level
                        }
                    })

                    playerState.items =  playerState.items.filter(item => {
                        return !this.usedInstanceIds[item.instanceId]
                    })

                }

                this.element.remove()
                this.onComplete()
            }
        })

        this.turnCycle.init()
    }

}
