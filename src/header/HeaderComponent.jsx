import React, {Component} from 'react';

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
                            {/*<a href="https://fun-app-19ltju.herokuapp.com" className="navbar-brand">Fun App</a>*/}
                            <a href="https://fun-app-react-develop.herokuapp.com" className="navbar-brand">Fun App</a>
                            | &nbsp;
                            {/*<a href="https://fun-app-19ltju.herokuapp.com/employees" className="navbar-brand">Employees</a>*/}
                            <a href="https://fun-app-19ltju.herokuapp.com/employees" className="navbar-brand">Employees</a>
                            | &nbsp;
                            {/*<a href="https://fun-app-19ltju.herokuapp.com/game" className="navbar-brand">Game</a>*/}
                            <a href="https://fun-app-react-develop.herokuapp.com/game" className="navbar-brand">Game</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
