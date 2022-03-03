import {OverworldMap} from "./OverworldMap";
import {DirectionInput} from "./DirectionInput";
import {KeyPressListener} from "./KeyPressListener";
import Enemies from "./content/enemies";
import Hud from "./Hud";

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
        this.hud = new Hud()
        this.hud.init(document.querySelector(".game-container"))

        this.startMap(window.OverworldMaps.DemoRoom)

        this.bindActionInput()
        this.bindHeroPositionCheck()

        this.directionInput = new DirectionInput()
        this.directionInput.init()
        this.directionInput.direction()

        this.startGameLoop()
    }
}
