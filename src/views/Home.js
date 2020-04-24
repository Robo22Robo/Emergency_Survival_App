import React from "react";
import { Route, NavLink } from "react-router-dom";
import Knoten from "../views/Knoten";
import Survival from "./Survival";
import Corona from "../views/Corona";

export default function Home({ match }) {
  return (
    <div className="supplies-container black">
      <div className="white">
        {/* Here we create a NESTED ROUTE */}
        Wählen Sie bitte die Überlebenstipps:
        <ul>
          <li>
            <NavLink activeClassName="active" to={`/home${match.url}Survival`}>
              Survival-Tipps
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to={`${match.url}/Corona`}>
              Corona-Tipps
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to={`${match.url}/Knoten`}>
              {" "}
              Knoten
            </NavLink>
          </li>
        </ul>
        <Route path={`${match.url}/:whoCredit`} component={Topic}></Route>
        <Route path={`${match.url}/Knoten`} component={Knoten} />
        <Route path={`${match.url}/Survival`} component={Survival} />
        <Route path={`${match.url}/Corona`} component={Corona} />
      </div>
    </div>
  );
}
/* Child React component*/
const Topic = ({ match }) => {
  return (
    <div className="cont textblack">
      <h3 style={{ marginBottom: "0px", paddingTop: "5px" }}>
        Topic selected {match.params.whoCredit} Tipps
      </h3>
    </div>
  );
};
