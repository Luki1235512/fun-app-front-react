const Actions = window.Actions = {
    damage1: {
        name: "Smack!",
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
    },
    tackledStatus: {
        name: "Purple hermit",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "glob", color: "#9400D3"},
            {type: "stateChange", status: {type: "tackled", expiresIn: 3}},
            {type: "textMessage", text: "{TARGET} is tackled"},
        ]
    }
}

export default Actions
