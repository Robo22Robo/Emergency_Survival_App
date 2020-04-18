/* React */
import React from "react";
/* Libraries */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

/* Components */

import Liste from "../views/Liste";
import Tipps from "../views/Tipps";
import Infizierte from "../views/Infizierte";
import Karte from "../views/Karte";
import Credit from "../views/Credit";
import MapChart from "../MapChart";

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
                  Survival-Tipps
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/liste">
                  Vorräte
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/infizierte">
                  Infizierte
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/karte">
                  Corona Karte
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/credit">
                  Credit
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Tipps />
            </Route>
            <Route path="/infizierte" component={Infizierte} />
            <Route path="/karte" component={Karte} />
            <Route path="/credit" component={Credit} />
            <Route path="/liste" component={Liste} />
            <Route path="*" render={() => <div>404 - Not found</div>} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
