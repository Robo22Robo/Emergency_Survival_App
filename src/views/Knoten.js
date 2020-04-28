import React from "react";
import { Player } from "video-react";
export default function Knoten() {
  return (
    <div className="cont textblack">
      <div className="container">
        <h2 style={{ marginTop: "0px", paddingTop: "10px" }}>Knoten:</h2>

        <div className="row">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Palstek</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/1_Palstek.mov"
                className="card-img-top"
                alt="Palstek"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Kreuzknoten</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/2_Kreuzknoten.mp4"
                className="card-img-top"
                alt="Kreuzknoten"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Schotstek</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/3_Schotstek.mp4"
                className="card-img-top"
                alt="Schotstek"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Gesteckter Webeleinstek</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/4_gesteckter_Webeleinstek.mp4"
                className="card-img-top"
                alt="Gesteckter Webeleinstek"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Eineinhalb Rundtörn mit Schlägen</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/5_eineinhalb_Rundtorn.mp4"
                className="card-img-top"
                alt="Eineinhalb Rundtörn mit zwei halben Schlägen"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Belegen auf einer Klampe</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/6_Belegen_auf_einer_Klampe.mp4"
                className="card-img-top"
                alt="Belegen auf einer Klampe"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Achtknoten</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/7_Achtknoten.mp4"
                className="card-img-top"
                alt="Achtknoten"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Webeleinstek</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/8_Webeleinstek.mp4"
                className="card-img-top"
                alt="Webeleinstek"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "30px" }}
            >
              <div className="card-body">
                <p className="card-text">Stopperstek</p>
              </div>
              <Player
                src="https://emergency-survival-app.com/src/video/9_Stopperstek_rechts_und_links.mp4"
                className="card-img-top"
                alt="Stopperstek"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
