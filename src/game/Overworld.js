import {Component} from "react";
import {OverworldMap} from "./OverworldMap";

export class Overworld extends Component{

    constructor(config) {
        super(config);
        this.ctx = config
        this.map = null
    }

    startGameLoop() {
        const step = () => {

            this.ctx.clearRect(0, 0, 352, 198)

            this.map.drawLowerImage(this.ctx)

            Object.values(this.map.gameObjects).forEach(object => {
                // object.x += 0.02
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

        this.map = new OverworldMap(window.OverworldMaps.Kitchen)
        this.startGameLoop()

        // const image = new Image()
        // image.src = imageURL
        // image.onload = () => {
        //     this.ctx.drawImage(image, 0, 0)
        // }
        //
        // const hero = new GameObject({
        //     x: 5,
        //     y: 6,
        // })
        //
        // const npc1 = new GameObject({
        //     x: 7,
        //     y: 9,
        //     src: npc1URL
        // })
        //
        // setTimeout(() => {
        //     hero.sprite.draw(this.ctx)
        //     npc1.sprite.draw(this.ctx)
        // }, 200)

    }
}
