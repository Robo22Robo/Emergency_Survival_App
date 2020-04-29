import React from "react";
import { Route, NavLink } from "react-router-dom";
import Knoten from "../views/Knoten";
import Survival from "./Survival";
import Corona from "../views/Corona";

export default function Tipps({ match }) {
  return (
    <div className="supplies-container">
      <h4 style={{ paddingBottom: "10px" }}>
        Wählen Sie bitte die Überlebenstipps:
      </h4>
      <div className="Tipps-Nav">
        <div className="container">
          <ul>
            <div className="row">
              <div className="col-sm">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`${match.url}/Survival`}
                  >
                    <h5>Survival-Tipps</h5>
                    <div className="Tipps-Icon">
                      <i className="fas fa-campground"></i>
                    </div>
                  </NavLink>
                </li>
              </div>

              <div className="col-sm">
                <li>
                  <NavLink activeClassName="active" to={`${match.url}/Corona`}>
                    <h5>Corona-Tipps</h5>
                    <div className="Tipps-Icon">
                      <i className="fas fa-crown"></i>
                    </div>
                  </NavLink>
                </li>
              </div>

              <div className="col-sm">
                <li>
                  <NavLink activeClassName="active" to={`${match.url}/Knoten`}>
                    <h5>Knoten</h5>
                    <div className="Tipps-Icon">
                      <i className="fas fa-code-branch"></i>
                    </div>
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
          <hr></hr>
        </div>
      </div>
      <Route path={`${match.url}/:whoCredit`} component={Topic}></Route>
      <Route path={`${match.url}/Knoten`} component={Knoten} />
      <Route path={`${match.url}/Survival`} component={Survival} />
      <Route path={`${match.url}/Corona`} component={Corona} />
    </div>
  );
}
/* Child React component*/
const Topic = ({ match }) => {
  return (
    <div>
      <h3 style={{ marginBottom: "0px", paddingTop: "5px" }}>
        Ausgewähltes Thema: {match.params.whoCredit}-Tipps
      </h3>
    </div>
  );
};
