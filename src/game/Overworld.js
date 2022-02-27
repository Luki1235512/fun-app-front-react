import {OverworldMap} from "./OverworldMap";
import {DirectionInput} from "./DirectionInput";
import {KeyPressListener} from "./KeyPressListener";

export class Overworld {

    constructor(config) {
        this.ctx = config
        this.map = null
    }

    startGameLoop() {
        const step = () => {

            this.ctx.clearRect(0, 0, 352, 198)

            const cameraPerson = this.map.gameObjects.hero

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction(),
                    map: this.map
                })
            })

            this.map.drawLowerImage(this.ctx, cameraPerson)

            Object.values(this.map.gameObjects).sort((a, b) => {
                return a.y - b.y
            }).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson)
            })

            this.map.drawUpperImage(this.ctx, cameraPerson)

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }

    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene()
        })
    }

    bindHeroPositionCheck() {
        document.addEventListener("PersonWalkingComplete", e => {
            if (e.detail.whoId === "hero") {
                // console.log("NEW HERO POS!")
                this.map.checkForFootstepCutscene()
            }
        })
    }

    startMap(mapConfig) {
        this.map = new OverworldMap(mapConfig)
        this.map.overworld = this
        this.map.mountObjects()
    }

    init() {

        this.startMap(window.OverworldMaps.DemoRoom)
        // console.log(this.map.walls)

        this.bindActionInput()
        this.bindHeroPositionCheck()

        this.directionInput = new DirectionInput()
        this.directionInput.init()
        this.directionInput.direction()

        this.startGameLoop()

        // this.map.startCutscene([
        //     {who: "hero", type: "walk", direction: "down"},
        //     {who: "hero", type: "walk", direction: "down"},
        //     {who: "npcA", type: "walk", direction: "up"},
        //     {who: "npcA", type: "walk", direction: "left"},
        //     {who: "hero", type: "stand", direction: "right", time: 200},
        //     {type: "textMessage", text: "HELLO THERE"},
        // ])

    }
}
