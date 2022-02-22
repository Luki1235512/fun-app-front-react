import imageURL from './images/maps/DemoLower.png'
import heroURL from './images/characters/people/hero.png'
import shadowURL from './images/characters/shadow.png'
import {Component} from "react";

export class Overworld extends Component{

    constructor(config) {
        super(config);
        this.ctx = config
    }

    init() {
        // console.log("Hello from the Overworld", this)

        const image = new Image()
        image.src = imageURL
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }

        const x = 5
        const y = 6

        const shadow = new Image()
        shadow.src = shadowURL
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        }

        const hero = new Image()
        hero.src = heroURL
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        }

    }
}
