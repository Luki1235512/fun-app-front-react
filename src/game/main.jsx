import React, {Component} from 'react';
import {Canvas} from "react-three-fiber";
import Scene from "./views/Scene";

class mainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }



    render() {
        return (
            <Canvas>
                <Scene />
            </Canvas>
        );
    }
}

export default mainComponent;
