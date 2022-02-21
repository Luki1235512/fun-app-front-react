import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "./employee/components/ListEmployeeComponent";
import CreateEmployeeComponent from "./employee/components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./employee/components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./employee/components/ViewEmployeeComponent";
import LandingPageComponent from "./landing/components/LandingPageComponent";
import Navbar from "./landing/components/Navbar";

const master = "https://fun-app-19ltju.herokuapp.com"
const local = "http://localhost:3000"

const navbarLinks = [
    // {url: "#", title: "Home"},
    {url: local + "/employees", title: "SPRING"},
    {url: "#", title: "THREE.JS"},
]

function App() {
  return (
      <div>
          <Router>
              <Navbar navbarLinks={navbarLinks} />
              {/*<div className="container">*/}
                  <Switch>
                      <Route path = "/" exact component= {LandingPageComponent} />
                      <Route path = "/employees" component = {ListEmployeeComponent}/>
                      <Route path = "/add-employee" component = {CreateEmployeeComponent}/>
                      <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>
                      <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
                      {/*<Route path = "/game" component = {testComponent}/>*/}
                  </Switch>
              {/*</div>*/}
              {/*<FooterComponent />*/}
          </Router>
      </div>
  );
}

export default App;
