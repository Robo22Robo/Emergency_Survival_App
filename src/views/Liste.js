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
          description: "description1",
          erledigt: true,
          show: false
        },
        {
          id: 2,
          titel: "Lebensmittel",
          description: "description2",
          erledigt: false,
          show: true
        },
        {
          id: 3,
          titel: "Toilettenpapier",
          description: "description3",
          erledigt: true,
          show: true
        },
        {
          id: 4,
          titel: "Zeitvertreib in Quarantäne-Situation",
          description: "description4",
          erledigt: true,
          show: true
        },
        {
          id: 5,
          titel: "ggf. Vorsorge Blackout-Szenario",
          description: "description5",
          erledigt: true,
          show: true
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
      id: this.state.liste.length + 1
    };
    this.setState({ liste: [...this.state.liste, eintrag], neuerEintrag: "" });
  };

  render() {
    return (
      <div>
        <h2>Vorräte:</h2>

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
    );
  }
}
export default Liste;
