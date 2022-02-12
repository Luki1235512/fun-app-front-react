import React from "react";
import {useThree} from "react-three-fiber";
import zero from '../assets/textures/0.png'
import one from '../assets/textures/1.png'
import two from '../assets/textures/2.png'
import three from '../assets/textures/3.png'
import four from '../assets/textures/4.png'
import five from '../assets/textures/5.png'
import six from '../assets/textures/6.png'
import seven from '../assets/textures/7.png'
import eight from '../assets/textures/8.png'
import nine from '../assets/textures/9.png'
import ten from '../assets/textures/10.png'
import eleven from '../assets/textures/11.png'
import twelve from '../assets/textures/12.png'
import thirteen from '../assets/textures/13.png'
import fourteen from '../assets/textures/14.png'
import fifteen from '../assets/textures/15.png'

function Scene() {

    // const { camera } = useThree();
    //
    // camera.fov = 45;
    // camera.aspect = window.innerWidth / window.innerHeight;
    //
    // camera.near = 0.1;
    // camera.far = 1000;
    //
    // camera.up.set(0, 0, 1);
    // camera.position.set(-5, 7, 5);

    return (
        <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
            <meshNormalMaterial attach='material' />
        </mesh>
    )
}

// <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
// <meshNormalMaterial attach='material' />

export default Scene
