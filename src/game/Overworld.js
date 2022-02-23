import imageURL from './images/maps/DemoLower.png'
import heroURL from './images/characters/people/hero.png'
import shadowURL from './images/characters/shadow.png'
import npc1URL from './images/characters/people/npc1.png'
import {Component} from "react";
import {GameObject} from "./GameObject";

export class Overworld extends Component{

    constructor(config) {
        super(config);
        this.ctx = config
    }

    init() {
        const image = new Image()
        image.src = imageURL
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }

        const hero = new GameObject({
            x: 5,
            y: 6,
        })

        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: npc1URL
        })

        setTimeout(() => {
            hero.sprite.draw(this.ctx)
            npc1.sprite.draw(this.ctx)
        }, 200)

    }
}
