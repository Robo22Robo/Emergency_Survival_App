import React, { Component } from "react";

class Counter extends Component {
  render() {
    const notAvailable = this.props.number.filter((n) => !n.erledigt === false);
    return (
      <div>
        <p>
          Vorräte vorbereitet{" "}
          <span
            className="badge "
            style={{
              backgroundColor: "lightgreen",
            }}
          >
            {notAvailable.length}
          </span>{" "}
          from{" "}
          <span
            className="badge"
            style={{
              backgroundColor: "lightblue",
            }}
          >
            {this.props.number.length}
          </span>
        </p>
      </div>
    );
  }
}
export default Counter;
