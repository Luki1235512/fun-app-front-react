import './App.css';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "./employee/components/ListEmployeeComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./header/FooterComponent";
import CreateEmployeeComponent from "./employee/components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./employee/components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./employee/components/ViewEmployeeComponent";
import mainComponent from "./game/main";
import { Route } from "wouter";


function App() {
  return (
      <div>
          <Route path="/game" component={mainComponent} />
          {/*<Router>*/}
          {/*    <HeaderComponent />*/}
          {/*    <div className="container">*/}
          {/*        <Switch>*/}
          {/*            <Route path = "/" exact />*/}
          {/*            <Route path = "/employees" component = {ListEmployeeComponent}/>*/}
          {/*            <Route path = "/add-employee" component = {CreateEmployeeComponent}/>*/}
          {/*            <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>*/}
          {/*            <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>*/}
          {/*            <Route path = "/game" component = {mainComponent}/>*/}
          {/*        </Switch>*/}
          {/*    </div>*/}
          {/*    <FooterComponent />*/}
          {/*</Router>*/}
      </div>
  );
}

export default App;
