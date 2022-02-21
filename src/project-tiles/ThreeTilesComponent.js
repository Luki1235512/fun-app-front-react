import './Tiles.css'
import pool from './assets/pool.png'


const ThreeTilesComponent = () => {
    return (
        <div className="tiles">
            <h1></h1>
            <div>
                <a href="https://csb-85wqot.netlify.app">
                    <img src={pool} alt="3D pool" className="Tile__image"/>
                </a>
            </div>
        </div>
    )
}

export default ThreeTilesComponent
