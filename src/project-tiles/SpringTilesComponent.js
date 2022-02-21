import './Tiles.css'
import emp from './assets/emp.png'


const SpringTilesComponent = () => {
    return (
        <div className="tiles">
            <h1></h1>
            <div>
                <a href="https://fun-app-19ltju.herokuapp.com/employees">
                    <img src={emp} alt="Employees app" className="Tile__image"/>
                </a>
            </div>
        </div>
    )
}

export default SpringTilesComponent
