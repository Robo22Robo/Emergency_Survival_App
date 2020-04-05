import React from "react";
import "../styles/Infizierte.scss";

export default class Infizierte extends React.Component {
  state = {
    loading: true,
    land: null,
  };

  async componentDidMount() {
    const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ land: data.countryitems[0], loading: false });
    console.log(data.countryitems[0]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.land ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              <table className="Infected-Table">
                <tr>
                  <th>Land</th>
                  <th>total_active_cases</th>
                  <th>total_cases</th>

                  <th>total_recovered</th>
                  <th>total_unresolved</th>
                  <th>total_deaths</th>
                  <th>total_new_cases_today</th>
                  <th>total_new_deaths_today</th>

                  <th>total_serious_cases</th>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
                <tr>
                  <td>{this.state.land[1].title}</td>
                  <td>{this.state.land[1].total_active_cases}</td>
                  <td>{this.state.land[1].total_cases}</td>
                  <td>{this.state.land[1].total_recovered}</td>
                  <td>{this.state.land[1].total_unresolved}</td>
                  <td>{this.state.land[1].total_deaths}</td>
                  <td>{this.state.land[1].total_new_cases_today}</td>
                  <td>{this.state.land[1].total_new_deaths_today}</td>
                  <td>{this.state.land[1].total_serious_cases}</td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
