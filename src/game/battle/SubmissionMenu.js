import Actions from "../content/actions";
import KeyboardMenu from "../KeyboardMenu";

export default class SubmissionMenu {
    constructor({caster, enemy, onComplete}) {
        this.caster = caster
        this.enemy = enemy
        this.onComplete = onComplete
    }

    getPages() {

        const backOption = {
            label: "Go back",
            description: "Return to previous page",
            handler: () => {
                this.keyboardMenu.setOptions(this.getPages().root)
            }
        }

        return {
            root: [
                {
                    label: "Attack",
                    description: "Choose an attack",
                    handler: () => {
                        // console.log("GO TO ATTACKS PAGE")
                        this.keyboardMenu.setOptions(this.getPages().attacks)
                    }
                },
                {
                    label: "Items",
                    description: "Choose an item",
                    // disabled: true,
                    handler: () => {
                        this.keyboardMenu.setOptions(this.getPages().items)
                    }
                },
                {
                    label: "Swap",
                    description: "Change stand",
                    handler: () => {

                    }
                }
            ],
            attacks: [
                ...this.caster.actions.map(key => {
                    const action = Actions[key]
                    return {
                        label: action.name,
                        description: action.description,
                        handler: () => {
                            this.menuSubmit(action)
                        }
                    }
                }),
                backOption
            ],
            items: [
                backOption
            ]
        }
    }

    menuSubmit(action, instanceId=null) {

        this.keyboardMenu?.end()

        this.onComplete({
            action,
            target: action.targetType === "friendly" ? this.caster : this.enemy
        })
    }

    decide() {
        this.menuSubmit(Actions[this.caster.actions[0]])
    }

    showMenu(container) {
        this.keyboardMenu = new KeyboardMenu()
        this.keyboardMenu.init(container)
        this.keyboardMenu.setOptions(this.getPages().root)
    }

    init(container) {
        if (this.caster.isPlayerControlled) {
            this.showMenu(container)
        } else {
            this.decide()
        }
    }
}
