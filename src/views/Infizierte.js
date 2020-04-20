import React from "react";
import ObjectList from "react-object-list";
import "../styles/Infizierte.scss";
export default class Infizierte extends React.Component {
  state = {
    loading: true,
    land: null,
    sortKeys: [],
  };
  async componentDidMount() {
    const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
    const response = await fetch(url);
    const data = await response.json();
    const dataset = data["countryitems"][0];
    const countryitems = Object.keys(dataset).map((id, key) => {
      return {
        land: dataset[id].title,
        total: dataset[id].total_cases,
        active: dataset[id].total_active_cases,
        recovered: dataset[id].total_recovered,
        unresolved: dataset[id].total_unresolved,
        deaths: dataset[id].total_deaths,
        new_cases_today: dataset[id].total_new_cases_today,
        new_deaths_today: dataset[id].total_new_deaths_today,
        serious_cases: dataset[id].total_serious_cases,
      };
    });
    console.log(countryitems);
    this.setState({
      countryitems,
      land: data["countryitems"][0],
      loading: false,
    });
  }
  updateSorting = (sortKey) =>
    this.setState((prevState) => {
      let sortKeys = [...prevState.sortKeys];
      const currentSort = sortKeys.find((sort) => sort.sortKey === sortKey);
      let value = true;
      if (currentSort !== undefined && currentSort.value === true) {
        value = false;
      }
      sortKeys = [{ sortKey: sortKey, value }].concat(
        sortKeys.filter((k) => k.sortKey !== sortKey)
      );
      const offset = (prevState.currentPage - 1) * prevState.perPage;
      return {
        sortKeys,
        data: this.state.countryitems
          .sort((a, b) => {
            for (let i = 0; i < sortKeys.length; i++) {
              const order = sortKeys[i].value ? 1 : -1;
              if (a[sortKeys[i].sortKey] > b[sortKeys[i].sortKey])
                return -1 * order;
              if (a[sortKeys[i].sortKey] < b[sortKeys[i].sortKey])
                return 1 * order;
            }
            return 0;
          })
          .slice(offset, offset + prevState.perPage),
      };
    });

  render() {
    return (
      <div>
        {this.state.loading || !this.state.land ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              <ObjectList
                columns={[
                  { dataKey: "land", header: "Land", sortKey: "land" },
                  { dataKey: "total", header: "Total", sortKey: "total" },
                  { dataKey: "active", header: "Active", sortKey: "active" },
                  {
                    dataKey: "recovered",
                    header: "Recovered",
                    sortKey: "recovered",
                  },
                  { dataKey: "deaths", header: "Death", sortKey: "deaths" },

                  {
                    dataKey: "new_cases_today",
                    header: "new cases today",
                    sortKey: "new_cases_today",
                  },
                  {
                    dataKey: "new_deaths_today",
                    header: "new deaths today",
                    sortKey: "new_deaths_today",
                  },
                  {
                    dataKey: "serious_cases",
                    header: "serious cases",
                    sortKey: "serious_cases",
                  },
                ]}
                data={this.state.countryitems}
                updateSorting={this.updateSorting}
                meta={{
                  totalCount: this.state.countryitems.length,
                }}
                favouritesEnabled={false}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
