import React from "react";

export default function Survival() {
  return (
    <div className="cont textblack">
      <div className="container">
        <h2 style={{ marginTop: "0px", paddingTop: "15px" }}>
          Was ist eine Überlebens-Situation (Survival-Situation)?
        </h2>
        <ol>
          <li>
            Du kannst nicht oder nur eingeschränkt auf Infrastruktur
            zurückgreifen (Wasser- und Stromversorgung, medizinische Versorgung,
            Lebensmittelversorgung, Transport).
          </li>
          <li>
            Die Aufrechterhaltung deiner Grundbedürfnisse erfordert deutlichen
            Aufwand.
          </li>
          <li>Du bist mittelfristig auf Rettung angewiesen.</li>
        </ol>
        <br />
        <h2>In einer Survival-Situation sind 7 Dinge überlebenswichtig:</h2>
        <i className="fab fa-gripfire" />
        Feuer &nbsp;
        <i class="far fa-life-ring" />
        Rettung &nbsp;
        <i class="fas fa-heart" />
        Unversertheit &nbsp;
        <i class="fas fa-glass-whiskey" />
        Wasser &nbsp;
        <i class="fas fa-drumstick-bite" /> Nahrung &nbsp;
        <i class="far fa-compass" />
        Orientierung &nbsp;
        <i class="fas fa-campground" />
        Unterkunft
      </div>
      <br />
    </div>
  );
}
