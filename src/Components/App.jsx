import React from 'react';
import Home from "./Static/Home"
import SignIn from "./Login/Login"
import Navbar from "./Navbar"
import {BrowserRouter as Router,Switch, Link, Route,Redirect} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/login">
          <SignIn/>
        </Route>
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
