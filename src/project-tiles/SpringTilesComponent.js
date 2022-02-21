import './Tiles.css'
import emp from './assets/emp.png'


const SpringTilesComponent = () => {
    return (
        <div className="tiles">
            <h1></h1>
            {/*<div className="tile">*/}
                <a href="https://fun-app-19ltju.herokuapp.com/employees" className="tile">
                    <img src={emp} alt="Employees app" className="tile__image"/>
                </a>
            {/*</div>*/}
        </div>
    )
}

export default SpringTilesComponent
