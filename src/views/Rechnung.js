import React, { Component } from "react";

class Rechnung extends Component {
  render() {
    const notAvailable = this.props.number.filter(n => !n.erledigt === false);
    return (
      <div>
        <p>
          Vorräte vorbereitet{" "}
          <span className="badge badge-success">{notAvailable.length}</span>{" "}
          from{" "}
          <span className="badge badge-info">{this.props.number.length}</span>
        </p>
      </div>
    );
  }
}
export default Rechnung;
