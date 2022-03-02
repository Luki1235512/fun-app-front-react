const Actions = window.Actions = {
    damage1: {
        name: "Smack!",
        description: "Just like the name",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "spin"},
            {type: "stateChange", damage: 10},
        ]
    },
    furiousStatus: {
        name: "Fury",
        description: "Too angry to die",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "stateChange", status: {type: "furious", expiresIn: 3}},
        ]
    },
    tackledStatus: {
        name: "Purple hermit",
        description: "Wraps around",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "glob", color: "#9400D3"},
            {type: "stateChange", status: {type: "tackled", expiresIn: 3}},
            {type: "textMessage", text: "{TARGET} is tackled"},
        ]
    },
    // ITEMS

    item_recoverStatus: {
        name: "Hamon",
        description: "Feeling fresh and warm",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses a {ACTION}!"},
            {type: "stateChange", status: null},
            {type: "textMessage", text: "Feeling fresh!"}
        ]
    },
    item_recoverHp: {
        name: "First aid",
        description: "Heals",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses an {ACTION}!"},
            {type: "stateChange", recover: 10},
            {type: "textMessage", text: "{CASTER} recovers HP!"}
        ]
    },

}


export default Actions
