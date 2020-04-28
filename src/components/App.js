/* React */
import React from "react";
/* Libraries */
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

/* Components */

import Liste from "../views/Liste";
import Willkommen from "../views/Willkommen";
import Infizierte from "../views/Infizierte";
import Karte from "../views/Karte";

import Tipps from "../views/Tipps";
import Kontakt from "../views/Kontakt";
import Success from "../views/Success";

import "../styles/App.scss";
import "../styles/Navigation-Bar.scss";

function App() {
  const welcome = "Emergency Survival App";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{welcome}</h1>
      </header>

      <Router>
        <div className="page-header">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark">
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
                  <a className="nav-item nav-link active">
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
                  <a className="nav-item nav-link">
                    <NavLink activeClassName="active" to="/kontakt">
                      Kontakt
                    </NavLink>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div>
          <Switch>
            <div>
              <Route exact path="/">
                <Willkommen />
              </Route>
              <Route path="/tipps" component={Tipps} />

              <Route path="/infizierte" component={Infizierte} />
              <Route path="/karte" component={Karte} />

              <Route path="/liste" component={Liste} />
              <Route path="/kontakt" component={Kontakt} />
              <Route path="/Success" component={Success} />
            </div>
          </Switch>
        </div>
      </Router>
      <div className="footer"></div>
    </div>
  );
}

export default App;
