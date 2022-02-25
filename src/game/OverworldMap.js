import demoLowerURL from './images/maps/DemoLower.png'
import demoUpperURL from './images/maps/DemoUpper.png'
import kitchenLowerURL from './images/maps/KitchenLower.png'
import kitchenUpperURL from './images/maps/KitchenUpper.png'
import {GameObject} from "./GameObject";
import npc1URL from './images/characters/people/npc1.png'
import npc2URL from './images/characters/people/npc2.png'
import utils from "./utils";
import {Person} from "./Person";
import {OverworldEvent} from "./OverworldEvent";

export class OverworldMap {

    constructor(config) {

        this.gameObjects = config.gameObjects
        this.walls = config.walls || {}

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc

        this.isCutscenePlaying = false
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
        Object.keys(this.gameObjects).forEach(key => {
            let object = this.gameObjects[key]
            object.id = key
            object.mount(this)
        })
    }

    async startCutscene(events) {
        this.isCutscenePlaying = true

        for (let i=0; i<events.length; i++) {
            const eventHandler = new OverworldEvent({
                event: events[i],
                map: this,
            })
            await eventHandler.init()
        }

        this.isCutscenePlaying = false
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
            npcA: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: npc1URL,
                behaviorLoop: [
                    {type: "stand", direction: "left", time: 800},
                    {type: "stand", direction: "up", time: 800},
                    {type: "stand", direction: "right", time: 1200},
                    {type: "stand", direction: "up", time: 300},
                ]
            }),
            npcB: new Person({
                x: utils.withGrid(3),
                y: utils.withGrid(7),
                src: npc2URL,
                behaviorLoop: [
                    {type: "walk", direction: "left"},
                    {type: "stand", direction: "up", time: 800},
                    {type: "walk", direction: "up"},
                    {type: "walk", direction: "right"},
                    {type: "walk", direction: "down"},
                ]
            }),
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
