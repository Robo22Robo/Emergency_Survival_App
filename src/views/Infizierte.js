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
                <thead>
                  <tr>
                    <th>Land</th>
                    <th>
                      total
                      <br />
                      cases
                    </th>
                    <th>
                      total
                      <br />
                      active
                      <br />
                      cases
                    </th>

                    <th>
                      total
                      <br />
                      recovered
                    </th>
                    <th>
                      total
                      <br />
                      unresolved
                    </th>
                    <th>
                      total
                      <br />
                      deaths
                    </th>
                    <th>
                      total new
                      <br />
                      cases
                      <br />
                      today
                    </th>
                    <th>
                      total new
                      <br />
                      deaths
                      <br />
                      today
                    </th>
                    <th>
                      total
                      <br />
                      serious
                      <br />
                      cases
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!this.state.loading &&
                    Object.keys(this.state.land).map((id, key) => {
                      return (
                        <tr key={key}>
                          <td>{this.state.land[id].title}</td>
                          <td>{this.state.land[id].total_cases}</td>
                          <td>{this.state.land[id].total_active_cases}</td>

                          <td>{this.state.land[id].total_recovered}</td>
                          <td>{this.state.land[id].total_unresolved}</td>
                          <td>{this.state.land[id].total_deaths}</td>
                          <td>{this.state.land[id].total_new_cases_today}</td>
                          <td>{this.state.land[id].total_new_deaths_today}</td>
                          <td>{this.state.land[id].total_serious_cases}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
