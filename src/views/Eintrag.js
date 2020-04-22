import React from "react";
import "../styles/Eintrag.scss";

const Eintrag = ({
  todo,
  eintragClickHandler,
  eintragClickHandlerShow,
  deleteItem,
}) => (
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
      <button onClick={deleteItem}>delete</button>
    </div>

    <div className={todo.show ? "Block Visible" : "Block"}>
      <div className="row">
        <div className="col-3">
          <img
            src={todo.picture}
            alt={todo.titel}
            className="descriptionPicture"
          />
        </div>

        <div className="col-8 todoDescription">{todo.description}</div>
      </div>
    </div>
  </li>
);

export default Eintrag;
