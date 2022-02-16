import './App.css';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "./employee/components/ListEmployeeComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./header/FooterComponent";
import CreateEmployeeComponent from "./employee/components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./employee/components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./employee/components/ViewEmployeeComponent";
import { Route } from "wouter";
import {Canvas} from "@react-three/fiber";
import Scene from "./game/Scene";


function App() {
  return (
<Canvas>
      {/*<div>*/}
              {/*<HeaderComponent />*/}
              {/*<div className="container">*/}

                      {/*<Route path = "/" exact />*/}
                      {/*<Route path = "/employees" component = {ListEmployeeComponent}/>*/}
                      {/*<Route path = "/add-employee" component = {CreateEmployeeComponent}/>*/}
                      {/*<Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>*/}
                      {/*<Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>*/}
                      {/*<Route path = "/game" component = {Scene}/>*/}
    <Scene/>

              {/*</div>*/}
              {/*<FooterComponent />*/}
      {/*</div>*/}
</Canvas>
  );
}

export default App;


// <div>
//     <Router>
//         <HeaderComponent />
//         <div className="container">
//             <Switch>
//                 <Route path = "/" exact />
//                 <Route path = "/employees" component = {ListEmployeeComponent}/>
//                 <Route path = "/add-employee" component = {CreateEmployeeComponent}/>
//                 <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>
//                 <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
//                 <Route path = "/game" component = {mainComponent}/>
//             </Switch>
//         </div>
//         <FooterComponent />
//     </Router>
// </div>
