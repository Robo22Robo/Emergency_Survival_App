import React, { Component } from "react";
import Eintrag from "./Eintrag";
import Rechnung from "./Rechnung";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: [
        {
          id: 1,
          titel: "Wasser",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
          picture:
            "https://www.outletdeluxe-24.de/project/img/bottles-60475_640.jpg",
          erledigt: true,
          show: false
        },
        {
          id: 2,
          titel: "Lebensmittel",
          description: "description2",
          picture:
            "https://www.outletdeluxe-24.de/project/img/spaghetti-4929957_640.jpg",
          erledigt: false,
          show: false
        },
        {
          id: 3,
          titel: "Toilettenpapier",
          description: "description3",
          picture:
            "https://www.outletdeluxe-24.de/project/img/toilet-paper-3964492_640.jpg",
          erledigt: true,
          show: false
        },
        {
          id: 4,
          titel: "Zeitvertreib in Quarantäne-Situation",
          description: "description4",
          picture:
            "https://www.outletdeluxe-24.de/project/img/books-1149959_640.jpg",
          erledigt: true,
          show: false
        },
        {
          id: 5,
          titel: "ggf. Vorsorge Blackout-Szenario",
          description: "description5",
          picture: "https://www.outletdeluxe-24.de/project/img/kuchenka.jpg",
          erledigt: true,
          show: false
        }
      ],
      neuerEintrag: ""
    };
  }

  eintragClickHandler = eintrag => {
    this.setState(prevState => ({
      liste: prevState.liste.map(prevEintrag =>
        prevEintrag.id === eintrag.id
          ? { ...prevEintrag, erledigt: !prevEintrag.erledigt }
          : prevEintrag
      )
    }));
  };

  eintragClickHandlerShow = eintrag => {
    this.setState(prevState => ({
      liste: prevState.liste.map(prevEintrag =>
        prevEintrag.id === eintrag.id
          ? { ...prevEintrag, show: !prevEintrag.show }
          : prevEintrag
      )
    }));
  };

  componentDidMount() {
    console.log("Hallo - Liste wurde gemounted");
  }

  componentWillUnmount() {
    console.log("Hallo - Ich werde jetzt ungemounted");
  }

  handleChange = event => {
    this.setState({ neuerEintrag: event.target.value });
  };

  handlerSubmit = event => {
    event.preventDefault();
    const eintrag = {
      titel: this.state.neuerEintrag,
      erledigt: false,
      hide: true,
      id: this.state.liste.length + 1
    };
    this.setState({ liste: [...this.state.liste, eintrag], neuerEintrag: "" });
  };

  render() {
    return (
      <div className="supplies-container">
        <div className="container">
          <h2 className="supplies-heading">Deine Vorräte:</h2>
          <p>Hast du die Vorräte vorbereitet?:</p>
          <Rechnung number={this.state.liste} />

          <ol>
            {this.state.liste.map(daten => (
              <Eintrag
                key={daten.id}
                todo={daten}
                eintragClickHandler={() => this.eintragClickHandler(daten)}
                eintragClickHandlerShow={() =>
                  this.eintragClickHandlerShow(daten)
                }
              />
            ))}
          </ol>

          <form onSubmit={this.handlerSubmit}>
            <label>
              Neuer Eintrag:{" "}
              <input
                type="text"
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
