import {KeyPressListener} from "./KeyPressListener";
import utils from "./utils";
import KeyboardMenu from "./KeyboardMenu";
import Stands from "./content/stands";
import playerState from "./state/PlayerState";

export class PauseMenu {
    constructor({onComplete}) {
        this.onComplete = onComplete
    }

    getOptions(pageKey) {
        if (pageKey === "root") {

            const lineupStands = playerState.lineup.map(id => {
                const {standId} = playerState.stands[id]
                const base = Stands[standId]
                return {
                    label: base.name,
                    description: base.description,
                    handler: () => {
                        this.keyboardMenu.setOptions(this.getOptions(id))
                    }
                }
            })

            return [
                ...lineupStands,
                {
                    label: "Save",
                    description: "Save your progress",
                    handler: () => {

                    }
                },
                {
                    label: "Close",
                    description: "Close the pause menu",
                    handler: () => {
                        this.close()
                    }
                }
            ]
        }

        const unequipped = Object.keys(playerState.stands).filter(id => {
            return playerState.lineup.indexOf(id) === -1
        }).map(id => {
            const {standId} = playerState.stands[id]
            const base = Stands[standId]
            return {
                label: `Swap for ${base.name}`,
                description : base.description,
                handler: () => {
                    playerState.swapLineup(pageKey, id)
                    this.keyboardMenu.setOptions(this.getOptions("root"))
                }
            }
        })

        return [
            ...unequipped,
            {
                label: "Move to front",
                description: "Move this pizza to the front of the list",
                handler: () => {

                }
            },
            {
                label: "Back",
                description: "Back to root menu",
                handler: () => {
                    this.keyboardMenu.setOptions(this.getOptions("root"))
                }
            }
        ]
    }

    createElement() {
        this.element = document.createElement("div")
        this.element.classList.add("PauseMenu")
        this.element.innerHTML = (`
            <h2>Pause Menu</h2>
        `)
    }

    close() {
        this.esc?.unbind()
        this.keyboardMenu.end()
        this.element.remove()
        this.onComplete()
    }

    async init(container) {
        this.createElement()
        this.keyboardMenu = new KeyboardMenu({
            descriptionContainer: container
        })
        this.keyboardMenu.init(this.element)
        this.keyboardMenu.setOptions(this.getOptions("root"))

        container.appendChild(this.element)

        utils.wait(200)
        this.esc = new KeyPressListener("Escape", () => {
            this.close()
        })
    }

}
