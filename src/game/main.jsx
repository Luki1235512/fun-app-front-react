import './main.css';
import React, {Component} from 'react';
import {Canvas} from "react-three-fiber";
import Scene from "./views/Scene";
import Controls from "./components/Controls";

class mainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    

    render() {
        return (
            <Canvas>
                {/*<Scene />*/}
                {/*<Controls />*/}
            </Canvas>
        );
    }
}

export default mainComponent;
