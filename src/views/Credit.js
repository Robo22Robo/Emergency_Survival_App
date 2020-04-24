import React from "react";
import { Route, NavLink } from "react-router-dom";
import Knoten from "../views/Knoten";

export default function Credit({ match }) {
  return (
    <div>
      {" "}
      {/* Here we create a NESTED ROUTE */}
      Wählen Sie bitte die Überleben Tipps
      <ul>
        <li>
          <NavLink activeClassName="active" to={`${match.url}/Survival-Tipps`}>
            Survival-Tipps
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to={`${match.url}/Corona-Tipps`}>
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
    </div>
  );
}
/* Child React component*/
const Topic = ({ match }) => {
  return (
    <div>
      <h3>Topic selected {match.params.whoCredit}</h3>
    </div>
  );
};
