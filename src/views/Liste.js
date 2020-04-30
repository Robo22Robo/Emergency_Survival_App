import React, { Component } from "react";
import Eintrag from "./Eintrag";
import Counter from "./Counter";

class Liste extends Component {
  constructor(props) {
    super(props);

    let liste = localStorage.getItem("liste");
    if (!liste) {
      liste = [
        {
          id: 1,
          titel: "Wasser",
          description:
            "2 Liter pro Tag und Person, Menge 20 Liter. Bei dem vorgeschlagenen Getränke-vorrat wurde über den reinen Bedarf eines Erwachsenen von mindestens 1,5 Litern pro Person und Tag hin-aus ein Zuschlag von 0,5 Litern vor-genommen, um unabhängig von der öffentlichen Trinkwasserversorgung auch über Wasser zur Zubereitung von Lebensmitteln wie z. B. Teigwaren, Reis oder Kartoffeln zu verfügen.",
          picture:
            "https://emergency-survival-app.com/src/img/bottles-60475_640.jpg",
          erledigt: false,
          show: false,
          button: false,
        },
        {
          id: 2,
          titel: "Lebensmittel",
          description:
            "Menge 3,5 kg - Getreide, Getreideprodukte, Brot, Kartoffeln, Nudeln, Reis. Gemüse, Hülsenfrücht 4,0 kg - Denken Sie daran, dass Gemüse und Hülsenfrüchte im Glas oder in Dosen bereits gekocht sind und für getrocknete Produkte zusätzlich Wasser benötigt wird. Obst, Nüsse 2,5 kg - Bevorraten Sie Obst in Dosen oder Gläsern und verwenden Sie als Frisch-obst nur lagerfähiges Obst. Sonstiges nach Belieben z. B. Fisch, Fleisch, Eier, bzw. Volleipulver Bitte beachten Sie, dass frische Eier nur begrenzt lagerfähig sind, Volleipulver ist hingegen mehrere Jahre haltbar.",
          picture:
            "https://emergency-survival-app.com/src/img/spaghetti-4929957_640.jpg",
          erledigt: false,
          show: false,
          button: false,
        },

        {
          id: 3,
          titel: "Hausapotheke",
          description:
            "DIN-Verbandskasten, vom Arzt verordnete Medikamente, Schmerzmittel, Hautdesinfektionsmittel, Wunddesinfektionsmittel, Mittel gegen Erkältungskrankheiten, Fieberthermometer, Mittel gegen Durchfall, Insektenstich- und Sonnenbrandsalbe, Splitterpinzette.",
          picture: "https://emergency-survival-app.com/src/img/medicine.jpg",
          erledigt: false,
          show: false,
          button: false,
        },

        {
          id: 4,
          titel: "Toilettenpapier",
          description:
            "Ein paar Packungen Toilettenpapier reichen vollkommen, bitte nicht übertreiben.",
          picture:
            "https://emergency-survival-app.com/src/img/toilet-paper-3964492_640.jpg",
          erledigt: false,
          show: false,
          button: false,
        },
        {
          id: 5,
          titel: "Zeitvertreib in Quarantäne-Situation",
          description: "Bücher, Hobbies",
          picture:
            "https://emergency-survival-app.com/src/img/books-1149959_640.jpg",
          erledigt: false,
          show: false,
          button: false,
        },
        {
          id: 6,
          titel: "ggf. Vorsorge Blackout-Szenario",
          description:
            "Kerzen, Teelichter, Streichhölzer, Feuerzeug, Taschenlampe, Reservebatterien, Camping-, Spirituskocher mit Brennmaterial, Heizgelegenheit, Brennstoffe",
          picture: "https://emergency-survival-app.com/src/img/kuchenka.jpg",
          erledigt: false,
          show: false,
          button: false,
        },
      ];

      localStorage.setItem("liste", JSON.stringify(liste));
    } else {
      liste = JSON.parse(liste);
    }

    this.state = {
      liste: liste,
      neuerEintrag: "",
    };
  }

  eintragClickHandler = (eintrag) => {
    this.setState((prevState) => ({
      liste: prevState.liste.map((prevEintrag) =>
        prevEintrag.id === eintrag.id
          ? { ...prevEintrag, erledigt: !prevEintrag.erledigt }
          : prevEintrag
      ),
    }));
  };

  eintragClickHandlerShow = (eintrag) => {
    this.setState((prevState) => ({
      liste: prevState.liste.map((prevEintrag) =>
        prevEintrag.id === eintrag.id
          ? { ...prevEintrag, show: !prevEintrag.show }
          : prevEintrag
      ),
    }));
  };

  safeListe = () => {
    localStorage.setItem("liste", JSON.stringify(this.state.liste));
  };

  componentDidMount() {
    console.log("Hallo - Liste wurde gemounted");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.liste != this.state.liste) {
      console.log("liste:", this.state.liste);
      this.safeListe();
    }
  }

  componentWillUnmount() {
    console.log("Hallo - Ich werde jetzt ungemounted");
  }

  handleChange = (event) => {
    this.setState({ neuerEintrag: event.target.value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    const eintrag = {
      titel: this.state.neuerEintrag,
      erledigt: false,
      hide: true,
      id: this.state.liste.length + 1,
    };
    this.setState({ liste: [...this.state.liste, eintrag], neuerEintrag: "" });
  };

  deleteItem = (eintragId) => {
    this.setState((prevState) => ({
      liste: prevState.liste.filter(
        (prevEintrag) => prevEintrag.id != eintragId
      ),
    }));
  };

  render() {
    return (
      <div className="supplies-container">
        <div className="container">
          <h2
            style={{ marginTop: "0px", marginBottom: "5px" }}
            className="supplies-heading"
          >
            {" "}
            Deine Vorräte:
          </h2>

          <p>Hast du die Vorräte vorbereitet?:</p>

          <Counter number={this.state.liste} />

          <ol>
            {this.state.liste.map((daten) => (
              <Eintrag
                key={daten.id}
                todo={daten}
                deleteItem={() => this.deleteItem(daten.id)}
                eintragClickHandler={() => this.eintragClickHandler(daten)}
                eintragClickHandlerShow={() =>
                  this.eintragClickHandlerShow(daten)
                }
              />
            ))}
          </ol>

          <form onSubmit={this.handlerSubmit}>
            <label className="Eintrag-label">
              <input
                type="text"
                placeholder="Dein Eintrag"
                value={this.state.neuerEintrag}
                onChange={this.handleChange}
              />
            </label>

            <input type="submit" value="Hinzufügen" />
          </form>
        </div>
      </div>
    );
  }
}
export default Liste;
