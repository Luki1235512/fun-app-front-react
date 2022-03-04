class PlayerState {

    constructor() {
        this.stands = {
            "s1": {
                standId: "r001",
                hp: 30,
                maxHp: 50,
                xp: 90,
                maxXp: 100,
                level: 1,
                status: {type: "furious"}
            },
            "s2": {
                standId: "g001",
                hp: 50,
                maxHp: 50,
                xp: 75,
                maxXp: 100,
                level: 1,
                status: null
            },
            "s3": {
                standId: "f001",
                hp: 50,
                maxHp: 50,
                xp: 75,
                maxXp: 100,
                level: 1,
                status: null
            }
        }
        this.lineup = ["s1", "s2"]
        this.items = [
            {actionId: "item_recoverHp", instanceId: "item1"},
            {actionId: "item_recoverHp", instanceId: "item2"},
            {actionId: "item_recoverHp", instanceId: "item3"},
        ]
    }
}

const playerState = window.playerState = new PlayerState();

export default playerState
