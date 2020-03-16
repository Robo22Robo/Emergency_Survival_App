import React from "react";
import "../styles/Eintrag.scss";

const Eintrag = ({ todo, eintragClickHandler, eintragClickHandlerShow }) => (
  <li className="Eintrag">
    <div className={todo.erledigt ? "Zu" : "Zu Erledigt"}>
      <span onClick={eintragClickHandler}>{todo.titel} </span>

      <div
        className={todo.show ? "Arrow Bottom" : todo.hide ? "hide" : "Arrow"}
        onClick={eintragClickHandlerShow}
      ></div>

      <button
        className={todo.erledigt ? "ButtonAvailable" : "not"}
        onClick={eintragClickHandler}
      >
        {todo.erledigt ? "vorbereitet" : "nicht vorbereitet"}
      </button>
    </div>

    <div className={todo.show ? "Block Visible" : "Block"}>
      {todo.description}
    </div>
  </li>
);

export default Eintrag;
