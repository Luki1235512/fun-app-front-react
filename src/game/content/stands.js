import w001URL from '../images/characters/stands/w001.png'
import g001URL from '../images/characters/stands/g001.png'
import r001URL from '../images/characters/stands/r001.png'
import waterURL from '../images/icons/water.png'
import grassURL from '../images/icons/grass.png'
import rockURL from '../images/icons/rock.png'


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
        type: StandTypes.water,
        src: w001URL,
        icon: waterURL,
        actions: ["damage1"]
    },
    "g001": {
        name: "Banana Thing",
        type: StandTypes.grass,
        src: g001URL,
        icon: grassURL,
        actions: ["furiousStatus", "damage1"]
    },
    "r001": {
        name: "Emerald Man",
        type: StandTypes.rock,
        src: r001URL,
        icon: rockURL,
        actions: ["damage1"]
    }
}

export default Stands
