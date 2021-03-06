import {OverworldMap} from "./OverworldMap";
import {DirectionInput} from "./DirectionInput";
import {KeyPressListener} from "./KeyPressListener";
import Enemies from "./content/enemies";
import Hud from "./Hud";
import {Progress} from "./Progress";

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

            if (!this.map.isPaused) {
                requestAnimationFrame(() => {
                    step()
                })
            }
        }
        step()
    }

    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene()
        })
        new KeyPressListener("Escape", () => {
            if (!this.map.isCutscenePlaying) {
                this.map.startCutscene([
                    {type: "pause"}
                ])
            }
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

    startMap(mapConfig, heroInitialState=null) {
        this.map = new OverworldMap(mapConfig)
        this.map.overworld = this
        this.map.mountObjects()

        if (heroInitialState) {
            const {hero} = this.map.gameObjects
            this.map.removeWall(hero.x, hero.y)
            hero.x = heroInitialState.x
            hero.y = heroInitialState.y
            hero.direction = heroInitialState.direction
            this.map.addWall(hero.x, hero.y)
        }

        this.progress.mapId = mapConfig.id
        this.progress.startingHeroX = this.map.gameObjects.hero.x
        this.progress.startingHeroY = this.map.gameObjects.hero.y
        this.progress.startingHeroDirection = this.map.gameObjects.hero.direction

    }

    init() {

        this.progress = new Progress()

        let initialHeroState = null
        const saveFile = this.progress.getSaveFile()
        if (saveFile) {
            this.progress.load()
            initialHeroState = {
                x: this.progress.startingHeroX,
                y: this.progress.startingHeroY,
                direction: this.progress.startingHeroDirection
            }
        }

        this.hud = new Hud()
        this.hud.init(document.querySelector(".game-container"))

        this.startMap(window.OverworldMaps[this.progress.mapId], initialHeroState)

        this.bindActionInput()
        this.bindHeroPositionCheck()

        this.directionInput = new DirectionInput()
        this.directionInput.init()
        this.directionInput.direction()

        this.startGameLoop()
    }
}
