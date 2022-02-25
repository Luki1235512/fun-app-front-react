import {OverworldMap} from "./OverworldMap";
import {DirectionInput} from "./DirectionInput";

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

            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson)
            })

            this.map.drawUpperImage(this.ctx, cameraPerson)

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }

    init() {

        this.map = new OverworldMap(window.OverworldMaps.DemoRoom)
        this.map.mountObjects()
        console.log(this.map.walls)

        this.directionInput = new DirectionInput()
        this.directionInput.init()
        this.directionInput.direction()

        this.startGameLoop()

    }
}
