import {Combatant} from "./battle/Combatant";
import Stands from "./content/stands";

export default class Hud {
    constructor() {
        this.scoreborards = []

    }
    update() {
        this.scoreborards.forEach(s => {
            s.update(window.playerState.stands[s.id])
        })
    }

    createElement() {
        this.element = document.createElement("div")
        this.element.classList.add("Hud")

        const {playerState} = window
        playerState.lineup.forEach(key => {
            const stand = playerState.stands[key]
            const scoreboard = new Combatant({
                id: key,
                ...Stands[stand.standId],
                ...stand,
            }, null)
            scoreboard.createElement()
            this.scoreborards.push(scoreboard)
            this.element.appendChild(scoreboard.hudElement)
        })
        this.update()
    }

    init(container) {
        this.createElement()
        container.appendChild(this.element)

        document.addEventListener("PlayerStateUpdated", () => {
            this.update()
        })
    }

}
