import React from 'react';
import Home from "./Static/Home"
import SignIn from "./Login/Login"
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
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
