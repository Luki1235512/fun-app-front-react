const Actions = window.Actions = {
    damage1: {
        name: "Whomp!",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "spin"},
            {type: "stateChange", damage: 10},
        ]
    },
    furiousStatus: {
        name: "Fury",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "stateChange", status: {type: "furious", expiresIn: 3}},
        ]
    }
}

export default Actions
