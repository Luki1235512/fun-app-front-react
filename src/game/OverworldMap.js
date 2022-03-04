import demoLowerURL from './images/maps/DemoLower.png'
import demoUpperURL from './images/maps/DemoUpper.png'
import kitchenLowerURL from './images/maps/KitchenLower.png'
import kitchenUpperURL from './images/maps/KitchenUpper.png'
import npc1URL from './images/characters/people/npc1.png'
import npc2URL from './images/characters/people/npc2.png'
import npc3URL from './images/characters/people/npc3.png'
import utils from "./utils";
import {Person} from "./Person";
import {OverworldEvent} from "./OverworldEvent";
import playerState from "./state/PlayerState";

export class OverworldMap {

    constructor(config) {

        this.overworld = null
        this.gameObjects = config.gameObjects
        this.cutsceneSpaces = config.cutsceneSpaces || {}
        this.walls = config.walls || {}

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc

        this.isCutscenePlaying = false
        this.isPaused = false
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
            const result = await eventHandler.init()
            if (result === "LOST_BATTLE") {
                break
            }
        }

        this.isCutscenePlaying = false

        Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))
    }

    checkForActionCutscene() {
        const hero = this.gameObjects["hero"]
        const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction)
        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
        })
        // console.log({match})
        if (!this.isCutscenePlaying && match && match.talking.length) {

            const relevantScenario = match.talking.find(scenerio => {
                return (scenerio.required || []).every(sf => {
                    return playerState.storyFlags[sf]
                })
            })

            relevantScenario && this.startCutscene(relevantScenario.events)
        }
    }

    checkForFootstepCutscene() {
        const hero = this.gameObjects["hero"]
        const match = this.cutsceneSpaces[`${hero.x},${hero.y}`]
        // console.log({match})
        if (!this.isCutscenePlaying && match) {
            this.startCutscene(match[0].events)
        }
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
                ],
                talking: [
                    {
                        required: ["TALKED_TO_GEORGE"],
                        events: [
                            {type: "textMessage", text: "George is so cool", faceHero: "npcA"}
                        ]
                    },
                    {
                        events: [
                            {type: "textMessage", text: "Can't you see I'm busy...?", faceHero: "npcA"},
                            {type: "battle", enemyId: "julie"},
                            {type: "addStoryFlag", flag: "DEFEATED_JULIE"},
                            {type: "textMessage", text: "UGH!", faceHero: "npcA"},
                        ]
                    }
                ]
            }),
            npcB: new Person({
                x: utils.withGrid(8),
                y: utils.withGrid(5),
                src: npc2URL,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "ㅋㅋㅋㅋ"},
                            {type: "addStoryFlag", flag: "TALKED_TO_GEORGE"},
                            {type: "battle", enemyId: "george"}
                        ]
                    }
                ]
            }),
        },
        walls: {
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true,

            [utils.asGridCoord(0, 4)]: true,
            [utils.asGridCoord(0, 5)]: true,
            [utils.asGridCoord(0, 6)]: true,
            [utils.asGridCoord(0, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(0, 9)]: true,

            [utils.asGridCoord(1, 10)]: true,
            [utils.asGridCoord(2, 10)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 10)]: true,
            [utils.asGridCoord(5, 11)]: true,
            [utils.asGridCoord(6, 10)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 10)]: true,
            [utils.asGridCoord(10, 10)]: true,

            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(11, 6)]: true,
            [utils.asGridCoord(11, 7)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(11, 9)]: true,

            [utils.asGridCoord(1, 3)]: true,
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(3, 3)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(5, 3)]: true,
            [utils.asGridCoord(9, 3)]: true,
            [utils.asGridCoord(10, 3)]: true,

            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,


        },
        cutsceneSpaces: {
            [utils.asGridCoord(7,4)]: [
                {
                    events: [
                        {who: "npcB", type: "walk", direction: "left"},
                        {who: "npcB", type: "stand", direction: "up", time: 500},
                        {type: "textMessage", text: "You can't be in there!"},
                        {who: "npcB", type: "walk", direction: "right"},

                        {who: "hero", type: "walk", direction: "down"},
                        {who: "hero", type: "walk", direction: "left"},
                    ]
                }
            ],
            [utils.asGridCoord(5, 10)]: [
                {
                    events: [
                        {type: "changeMap", map: "Kitchen"},
                        // {type: "battle"}
                    ]
                }
            ]
        },
    },
    Kitchen: {
        lowerSrc: kitchenLowerURL,
        upperSrc: kitchenUpperURL,
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(9)
            }),
            npcA: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(8),
                src: npc3URL,
                talking: [
                    {
                        events: [
                            {type: "textMessage", text: "You made it!", faceHero: ["npcA"]}
                        ]
                    }
                ]
            })
        },
        walls: {
            [utils.asGridCoord(1, 4)]: true,
            [utils.asGridCoord(1, 5)]: true,
            [utils.asGridCoord(1, 6)]: true,
            [utils.asGridCoord(1, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(1, 9)]: true,

            [utils.asGridCoord(2, 9)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 10)]: true,
            [utils.asGridCoord(5, 11)]: true,
            [utils.asGridCoord(6, 10)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 9)]: true,
            [utils.asGridCoord(10, 9)]: true,
            [utils.asGridCoord(11, 10)]: true,
            [utils.asGridCoord(12, 10)]: true,

            [utils.asGridCoord(13, 9)]: true,
            [utils.asGridCoord(13, 8)]: true,
            [utils.asGridCoord(13, 7)]: true,
            [utils.asGridCoord(13, 6)]: true,
            [utils.asGridCoord(13, 5)]: true,

            [utils.asGridCoord(12, 4)]: true,
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(10, 4)]: true,
            [utils.asGridCoord(9, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,
            [utils.asGridCoord(7, 4)]: true,
            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(5, 4)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(3, 4)]: true,
            [utils.asGridCoord(2, 4)]: true,

            [utils.asGridCoord(6, 7)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(9, 7)]: true,
            [utils.asGridCoord(10, 7)]: true,
            [utils.asGridCoord(9, 9)]: true,
            [utils.asGridCoord(10, 9)]: true,

        },
        cutsceneSpaces: {
            [utils.asGridCoord(5, 10)]: [
                {
                    events: [
                        {type: "changeMap", map: "DemoRoom"}
                    ]
                }
            ]
        }
    }
}
