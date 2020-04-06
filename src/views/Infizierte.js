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
                <tr>
                  {this.state.loading &&
                    this.state.land.map((country) => {
                      return (
                        <>
                          <td>{country.title}</td>
                          <td>{country.total_active_cases}</td>
                          <td>{country.total_cases}</td>
                          <td>{country.total_recovered}</td>
                          <td>{country.total_unresolved}</td>
                          <td>{country.total_deaths}</td>
                          <td>{country.total_new_cases_today}</td>
                          <td>{country.total_new_deaths_today}</td>
                          <td>{country.total_serious_cases}</td>
                        </>
                      );
                    })}
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
