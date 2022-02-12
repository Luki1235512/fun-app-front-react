import React, {Component} from 'react';

const masterURL = "https://fun-app-19ltju.herokuapp.com"
const developURL = "https://fun-app-react-develop.herokuapp.com"
const localURL = "http://localhost:3000"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            {/*<a href={developURL} className="navbar-brand">Fun App</a>*/}
                            <a href={localURL} className="navbar-brand">Fun App</a>
                            | &nbsp;
                            {/*<a href={developURL + "/employees"} className="navbar-brand">Employees</a>*/}
                            <a href={localURL + "/employees"} className="navbar-brand">Employees</a>
                            | &nbsp;
                            {/*<a href={developURL + "/game"} className="navbar-brand">Game</a>*/}
                            <a href={localURL + "/game"} className="navbar-brand">Game</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
