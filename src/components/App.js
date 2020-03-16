/* React */
import React from "react";
/* Libraries */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

/* Components */

import Liste from "../views/Liste";
import Home from "../views/Home";
import About from "../views/About";
import Credit from "../views/Credit";

import "../styles/App.scss";
import "../styles/Navigation-Bar.scss";

function App() {
  const welcome = "Emergency Survival App";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{welcome}</h1>
        <Router>
          <div>
            <ul className="Navigation-Bar">
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/credit">
                  Credit
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/this-does-not-exist">
                  Nope
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/credit" component={Credit} />
            <Route path="*" render={() => <div>404 - Not found</div>} />
          </Switch>
        </Router>
      </header>
      <div className="container">
        <Liste />
      </div>
    </div>
  );
}

export default App;