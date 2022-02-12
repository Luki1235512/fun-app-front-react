import './main.css';
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
            <h1>:)</h1>
            // <Canvas>
            //     <Scene />
            //     {/*<Controls />*/}
            // </Canvas>
        );
    }
}

export default mainComponent;
