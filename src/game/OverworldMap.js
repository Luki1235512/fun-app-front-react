import demoLowerURL from './images/maps/DemoLower.png'
import demoUpperURL from './images/maps/DemoUpper.png'
import kitchenLowerURL from './images/maps/KitchenLower.png'
import kitchenUpperURL from './images/maps/KitchenUpper.png'
import {GameObject} from "./GameObject";
import npc1URL from './images/characters/people/npc1.png'
import npc2URL from './images/characters/people/npc2.png'
import utils from "./utils";
import {Person} from "./Person";

export class OverworldMap {

    constructor(config) {

        this.gameObjects = config.gameObjects
        this.walls = config.walls || {}

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc
    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y)
    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y)
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction)
        return this.walls[`${x},${y}`] || false
    }

    mountObjects() {
        Object.values(this.gameObjects).forEach(o => {
            o.mount(this)
        })
    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true
    }

    removeWall(x, y) {
        delete this.walls[`${x},${y}`]
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY)
        const {x,y} = utils.nextPosition(wasX, wasY, direction)
        this.addWall(x,y)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: demoLowerURL,
        upperSrc: demoUpperURL,
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6)
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: npc1URL
            })
        },
        walls: {
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true
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
