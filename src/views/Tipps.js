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
              src="https://www.outletdeluxe-24.de/project/video/1_Palstek.mov"
              className="card-img-top"
              alt="Palstek"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Kreuzknoten</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/2_Kreuzknoten.mp4"
              className="card-img-top"
              alt="Kreuzknoten"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Schotstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/3_Schotstek.mp4"
              className="card-img-top"
              alt="Schotstek"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Gesteckter Webeleinstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/4_gesteckter_Webeleinstek.mp4"
              className="card-img-top"
              alt="Gesteckter Webeleinstek"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">
                Eineinhalb Rundtörn mit zwei halben Schlägen
              </p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/5_eineinhalb_Rundtorn.mp4"
              className="card-img-top"
              alt="Eineinhalb Rundtörn mit zwei halben Schlägen"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Belegen auf einer Klampe</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/6_Belegen_auf_einer_Klampe.mp4"
              className="card-img-top"
              alt="Belegen auf einer Klampe"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Achtknoten</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/7_Achtknoten.mp4"
              className="card-img-top"
              alt="Achtknoten"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Webeleinstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/8_Webeleinstek.mp4"
              className="card-img-top"
              alt="Webeleinstek"
            />
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Stopperstek</p>
            </div>
            <Player
              src="https://www.outletdeluxe-24.de/project/video/9_Stopperstek_rechts_und_links.mp4"
              className="card-img-top"
              alt="Stopperstek"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
