import {Component} from "react";
import {Sprite} from "./Sprite";
import heroURL from './images/characters/people/hero.png'

export class GameObject extends Component{

    constructor(config) {
        super(config);

        this.x = config.x || 0
        this.y = config.y || 0
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || heroURL,

        })
        // this.ctx = config
    }

}
