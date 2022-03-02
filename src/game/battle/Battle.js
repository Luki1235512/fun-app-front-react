import heroURL from '../images/characters/people/hero.png'
import npc3URL from '../images/characters/people/npc3.png'
import {Combatant} from "./Combatant";
import Stands from '../content/stands'


export class Battle {
    constructor() {
        this.combatants =  {
            "player1": new Combatant({
                ...Stands.r001,
                team: "player",
                hp: 30,
                maxHp: 50,
                xp: 70,
                maxXp: 100,
                level: 1,
                status: null
            }, this),
            "enemy1": new Combatant({
                ...Stands.g001,
                team: "enemy",
                hp: 20,
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

        Object.keys(this.combatants).forEach(key => {
            let combatant = this.combatants[key]
            combatant.id = key
            combatant.init(this.element)
        })
    }

}
