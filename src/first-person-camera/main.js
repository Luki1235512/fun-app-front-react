import {FirstPersonCameraDemo} from "./components/FirstPersonCameraDemo";
import {render} from "react-dom";

let APP = null

function main() {
    // return console.log("ddd")
    window.addEventListener('DOMContentLoaded', () => {
        APP = new FirstPersonCameraDemo()

    })
}

export default main()
