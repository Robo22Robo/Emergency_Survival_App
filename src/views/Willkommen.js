import React from "react";

export default function Willkommen() {
  return (
    <div className="wilkommen-page-header">
      <br />
      <div
        className="supplies-container container transparent d-flex flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h2 style={{ marginTop: "0px", marginBottom: "5px" }}>
          Willkommen auf meiner Webseite
        </h2>
        <h3 style={{ paddingBottom: "5px" }}>Hier erwarten dich:</h3>
        <br />
        <p>Nützliche Survival Tipps.</p>
        <p>Tipps wie man sich von Coronavirus schützen kann</p>
        <p>Wie man Knoten macht</p>
        <br />
        <p>Welche Vorräte man sich vorbereiten sollte und warum.</p>
        <p>Die Statistik über mit Coronavirus infizierten.</p>
        <p>Eine interaktive Karte mit Coronavirus infizierten.</p>
        <p>Sie können mich auch gerne kontaktieren. </p>
      </div>
    </div>
  );
}
