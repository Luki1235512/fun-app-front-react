import React from "react";
import {useThree} from "react-three-fiber";
import Lights from "./Lights";
import PoolTable from "./PoolTable";

function Scene() {

    const { camera } = useThree();

    camera.fov = 45;
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.near = 0.1;
    camera.far = 1000;

    camera.up.set(0, 0, 1);
    camera.position.set(-5, 7, 5);

    return (
        <>
            <Lights
                type='AmbientLight'
                color={0xffffff}
                intensity={0.2}
                position={[0, 0, 0]}
            />
            {[[-5, -12, 20], [5, -12, 20], [-5, 12, 20], [5, 12, 20]].map(pos => (
                <Lights
                    type='PointLight'
                    color={0xffffff}
                    intensity={0.4}
                    distance={100}
                    position={pos}
                    castShadow
                />
            ))}
            <React.Suspense fallback={<mesh />}>
                <PoolTable />
            </React.Suspense>
        </>
    )
}

// <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
// <meshNormalMaterial attach='material' />

export default Scene
