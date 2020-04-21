import React from "react";
import { Player } from "video-react";
export default function Tips() {
  return (
    <div className="supplies-container">
      <div className="container">
        <h2>Was ist eine Überlebens-Situation (Survival-Situation)?</h2>
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
      <h2>Knoten:</h2>

      <div className="row">
        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Palstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/knoten.MP4"
              className="card-img-top"
              alt="Dicker Mops"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Kreuzknoten</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/knoten.MP4"
              className="card-img-top"
              alt="Dicker Mops"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Slipstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/knoten.MP4"
              className="card-img-top"
              alt="Dicker Mops"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
