import npc2URL from '../images/characters/people/npc2.png'
import npc1URL from '../images/characters/people/npc1.png'

const Enemies = window.Enemies = {
    "george": {
        name: "George",
        src: npc2URL,
        stands: {
            "a": {
                standId: "w001",
                maxHp: 50,
                level: 1
            },
            "b": {
                standId: "f001",
                maxHp: 50,
                level: 1
            }
        }
    },
    "julie": {
        name: "Julie",
        src: npc1URL,
        stands: {
            "a": {
                hp: 1,
                standId: "g001",
                maxHp: 50,
                level: 1
            }
        }
    }
}

export default Enemies
