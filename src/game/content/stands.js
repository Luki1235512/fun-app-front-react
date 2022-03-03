import w001URL from '../images/characters/stands/w001.png'
import g001URL from '../images/characters/stands/g001.png'
import r001URL from '../images/characters/stands/r001.png'
import f001URL from '../images/characters/stands/f001.png'
import waterURL from '../images/icons/water.png'
import grassURL from '../images/icons/grass.png'
import rockURL from '../images/icons/rock.png'
import fireURL from '../images/icons/fire.png'


const StandTypes = window.StandTypes = {
    normal: "normal",
    fire: "fire",
    fighting: "fighting",
    water: "water",
    flying: "flying",
    grass: "grass",
    poison: "poison",
    electric: "electric",
    ground: "ground",
    psychic: "psychic",
    rock: "rock",
    ice: "ice",
    bug: "bug",
    dragon: "dragon",
    ghost: "ghost",
    dark: "dark",
    steel: "steel",
    fairy: "fairy"
}
const Stands = window.Stands = {
    "w001": {
        name: "Venomous Water",
        description: "Watery boi",
        type: StandTypes.water,
        src: w001URL,
        icon: waterURL,
        actions: ["tackledStatus", "damage1", "furiousStatus"]
    },
    "f001": {
        name: "Angel Flame",
        description: "Holy flame",
        type: StandTypes.fire,
        src: f001URL,
        icon: fireURL,
        actions: ["tackledStatus", "damage1", "furiousStatus"]
    },

    "g001": {
        name: "Banana Thing",
        description: "Curved boi",
        type: StandTypes.grass,
        src: g001URL,
        icon: grassURL,
        actions: ["damage1", "tackledStatus", "furiousStatus"]
    },
    "r001": {
        name: "Emerald Man",
        description: "Interested in trading",
        type: StandTypes.rock,
        src: r001URL,
        icon: rockURL,
        actions: ["tackledStatus", "damage1", "furiousStatus"]
    }
}

export default Stands
