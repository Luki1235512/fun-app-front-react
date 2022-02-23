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

            this.map.drawLowerImage(this.ctx)

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction()
                })
                object.sprite.draw(this.ctx)
            })

            this.map.drawUpperImage(this.ctx)

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }

    init() {

        this.map = new OverworldMap(window.OverworldMaps.DemoRoom)

        this.directionInput = new DirectionInput()
        this.directionInput.init()
        this.directionInput.direction()

        this.startGameLoop()

    }
}
