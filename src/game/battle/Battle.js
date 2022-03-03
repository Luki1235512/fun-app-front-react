import heroURL from '../images/characters/people/hero.png'
import npc3URL from '../images/characters/people/npc3.png'
import {Combatant} from "./Combatant";
import Stands from '../content/stands'
import TurnCycle from "./TurnCycle";
import BattleEvent from "./BattleEvent";
import Team from "./Team";

export class Battle {
    constructor() {
        this.combatants =  {
            "player1": new Combatant({
                ...Stands.r001,
                team: "player",
                hp: 30,
                maxHp: 50,
                xp: 95,
                maxXp: 100,
                level: 1,
                status: null,
                isPlayerControlled: true
            }, this),
            "player2": new Combatant({
                ...Stands.f001,
                team: "player",
                hp: 30,
                maxHp: 50,
                xp: 75,
                maxXp: 100,
                level: 1,
                status: null,
                isPlayerControlled: true
            }, this),
            "enemy1": new Combatant({
                ...Stands.g001,
                team: "enemy",
                hp: 1,
                maxHp: 50,
                xp: 20,
                maxXp: 100,
                level: 1,
            }, this),
            "enemy2": new Combatant({
                ...Stands.r001,
                team: "enemy",
                hp: 25,
                maxHp: 50,
                xp: 30,
                maxXp: 100,
                level: 1,
            }, this),
        }
        this.activeCombatants = {
            player: "player1",
            enemy: "enemy1"
        }
        this.items = [
            {actionId: "item_recoverStatus", instanceId: "p1", team: "player"},
            {actionId: "item_recoverStatus", instanceId: "p2", team: "player"},
            {actionId: "item_recoverStatus", instanceId: "p3", team: "enemy"},

            {actionId: "item_recoverHp", instanceId: "p4", team: "player"},
        ]
    }

    createElement() {
        this.element = document.createElement("div")
        this.element.classList.add("Battle")
        this.element.innerHTML = (`
        <div class="Battle_hero">
            <img src="${heroURL}" alt="Hero">
        </div>
        
        <div class="Battle_enemy">
            <img src="${npc3URL}" alt="Enemy">
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
            }
        })

        this.turnCycle.init()
    }

}
