import React from 'react';
import Home from "./Static/Home"
import SignIn from "./Login/Login"
import Inq from "./Visualisations/Inq"
import State from "./Visualisations/State"
import Avg from "./Visualisations/Avg"
import Count from "./Visualisations/Count"
import '../../node_modules/react-vis/dist/style.css';
// import '../node_modules/react-vis/dist/style.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route path="/employee-home">
          <Home/>
        </Route>
        <Route path="/visualisations">
        <div>
          <Inq/>
          <State/>
          <Avg/>
          <Count/>
        </div>
        </Route>
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
