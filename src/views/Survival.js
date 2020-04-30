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
        <br /> <br />
        <p>Wichtige Survival-Techniken - Kurzübersicht</p>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Notsignal</p>
          <p style={{ textAlign: "justify" }}>
            Dieses Signal wird auch als „Alpines Notsignal“ bezeichnet und ist
            international als Licht- und Tonsignal gebräuchlich. Ablauf: 6 Mal
            Aufleuchten/Tonsignal innerhalb von 1 Minute, dann 1 Minute Pause.
            Wiederholen. Antwort: 3 Mal Aufleuchten/Tonsignal.
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Zunder sammeln</p>
          <p style={{ textAlign: "justify" }}>
            Um jederzeit ein Feuer machen zu können, sammle bei jeder
            Gelegenheit Zundermaterial.
            <ul>
              <li>Birkenrinde</li>
              <li>Späne von trockenem Weichholz, z.B. Kiefer o. Birke</li>
              <li>zwischen den Fingern zerriebene Grasblüten</li>
              <li>verkohlte Stoff-Stücken, v.a. Baumwolle</li>
              <li>trockenes und zerkleinertes Gras</li>
            </ul>
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Trinkwasser</p>
          <p style={{ textAlign: "justify" }}>
            Ein Erwachsener benötigt etwa 2,5 Liter Wasser am Tag. Um Wasser zu
            finden, folge Wildpfaden, Insekten und Vögeln und halte Ausschau
            nach besonders üppiger Vegetation. Wasser aus der Natur immer
            reinigen: Grobreinigung mit selbstgebautem Filter (Watte, Stoff,
            Sand, Kohle), danach 10 Minuten abkochen. Im besten Fall hast du
            Wasserreinigungs- Tabletten dabei.
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Orientierung</p>
          <p style={{ textAlign: "justify" }}>
            Mit dem Kompass: Achte darauf, dass der Kompass waagerecht liegt und
            sich keine Metallgegenstände in der Nähe befinden. Überprüfe die
            Marschrichtung alle 20 Minuten. Mit der Uhr: Halte den Stundenzeiger
            in Richtung Sonne. Zwischen dem Stundenzeiger und der 12
            (vormittags) bzw. zwischen der 12 und dem Stundenzeiger
            (nachmittags) befindet sich Süden. In Sommerzeit 1 Stunde von der
            Zeit abziehen.
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Schutz</p>
          <p style={{ textAlign: "justify" }}>
            Mehrere Schichten dünner Kleidung sind wärmer als eine Schicht
            dicker Kleidung. Mütze gegen Kälte bzw. als Sonnenschutz tragen.
            Kleidung trocken halten. Bei Hitze ein feuchtes Tuch (Wasser, Urin)
            um den Kopf wickeln.
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Unterkunft</p>
          <p style={{ textAlign: "justify" }}>
            Nachts immer eine Unterkunft bauen. Mit Reisig (im urbanen Gebiet
            mit Zeitungen oder Pappen) den Boden isolieren und weich machen. So
            viel Kleidung wie möglich tragen. Rettungsdecke um Körper wickeln.
          </p>
        </div>
        <div className="container">
          <p style={{ fontWeight: "bold" }}>Wie mache ich ein Feuer?</p>
          <p style={{ textAlign: "justify" }}>
            Unabhängig davon, welche Möglichkeiten dir zum Feuermachen zur
            Verfügung stehen, eines bleibt immer gleich: Umso besser deine
            Vorbereitung, desto einfacher wirst du es haben.
            <ol>
              <li>
                Sammle trockenes Holz in verschiedenen Größen – kleine Äste,
                mittelgroße Äste, dicke Äste. Daraus baust du später das Feuer
                auf und hast zudem Nachschub.
              </li>
              <li>
                Sammle Zundermaterial (siehe Teil 1), um deinen Feueranzünder zu
                bauen.
              </li>
              <li>
                Lege dir alle Materialien gut erreichbar zurecht. Sobald der
                Zunder brennt, solltest du ihn schon ins fertig vorbereitete
                Feuer legen können.
              </li>
              <li>
                Achte darauf, dass dein Feuerzeug oder deine Streichhölzer
                wasserdicht verpackt sind. Ebenso kannst du Zunder in einem
                wasserdichten Behälter transportieren.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
