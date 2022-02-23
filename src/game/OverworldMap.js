import {Component} from "react";
import demoLowerURL from './images/maps/DemoLower.png'
import demoUpperURL from './images/maps/DemoUpper.png'
import kitchenLowerURL from './images/maps/KitchenLower.png'
import kitchenUpperURL from './images/maps/KitchenUpper.png'
import {GameObject} from "./GameObject";
import npc1URL from './images/characters/people/npc1.png'
import npc2URL from './images/characters/people/npc2.png'

export class OverworldMap extends Component {

    constructor(config) {
        super(config);

        this.gameObjects = config.gameObjects

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: demoLowerURL,
        upperSrc: demoUpperURL,
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: npc1URL
            })
        }
    },

    Kitchen: {
        lowerSrc: kitchenLowerURL,
        upperSrc: kitchenUpperURL,
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 1
            }),
            npcA: new GameObject({
                x: 9,
                y: 2,
                src: npc1URL
            }),
            npcB: new GameObject({
                x: 10,
                y: 4,
                src: npc2URL
            })
        }
    }
}
