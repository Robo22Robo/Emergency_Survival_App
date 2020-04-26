/* React */
import React from "react";
/* Libraries */
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

/* Components */

import Liste from "../views/Liste";
import Willkommen from "../views/Willkommen";
import Infizierte from "../views/Infizierte";
import Karte from "../views/Karte";
import TableDemo from "../views/Test";
import Tipps from "../views/Tipps";

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
            <nav className="navbar navbar-expand-sm navbar-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">
                    <NavLink exact activeClassName="active" to="/">
                      Willkommen
                    </NavLink>
                  </a>

                  <a className="nav-item nav-link">
                    <NavLink activeClassName="active" to="/tipps">
                      Tipps
                    </NavLink>
                  </a>
                  <a className="nav-item nav-link">
                    <NavLink activeClassName="active" to="/liste">
                      Vorräte
                    </NavLink>
                  </a>

                  <a className="nav-item nav-link">
                    <NavLink activeClassName="active" to="/infizierte">
                      Infizierte
                    </NavLink>
                  </a>

                  <a className="nav-item nav-link">
                    <NavLink activeClassName="active" to="/karte">
                      Corona&nbsp;Karte
                    </NavLink>
                  </a>
                </div>
              </div>
            </nav>

            {/* <ul className="Navigation-Bar">
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Willkommen
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/tipps">
                  Tipps
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
                <NavLink activeClassName="active" to="/test">
                  test
                </NavLink>
              </li>
            </ul> */}
          </div>
          <Switch>
            <Route exact path="/">
              <Willkommen />
            </Route>
            <Route path="/tipps" component={Tipps} />

            <Route path="/infizierte" component={Infizierte} />
            <Route path="/karte" component={Karte} />
            <Route path="/test" component={TableDemo} />

            <Route path="/liste" component={Liste} />
            {/* <Route path="*" render={() => <div>404 - Not found</div>} /> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
