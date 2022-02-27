import './styles/GameMain.css'
import './styles/TextMessage.css'
import './styles/SceneTransition.css'
import React from "react";
import {Overworld} from "./Overworld";

const GameMain = () => {

    const canvasRef = React.useRef();

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const game = new Overworld(ctx)
        game.init()
    });

    return (
        <div className="main-body">
            <div className="game-container">
                <canvas className="game-canvas" width="352" height="198" ref={canvasRef}>

                </canvas>

            </div>
        </div>

    )
}

export default GameMain
