import React, { Component } from "react";
import { fetchWeather } from "./utils/api";
import { Search, Card, SearchList, Results } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.saveLocal = this.saveLocal.bind(this);
    this.currentSearch = this.currentSearch.bind(this);
    this.clearError = this.clearError.bind(this);

    this.state = {
      searched: [],
      current: null,
      searchError: false
    };
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem("searched");
    if (localStorageRef) {
      // console.log('local storage: ', localStorageRef)
      this.setState({ searched: JSON.parse(localStorageRef) });
    } else {
      console.log("no local storage");
    }
  }

  componentWillUpdate(nextProps, nextState) {
    //save search results to local storage
    const searched = JSON.stringify(nextState.searched);
    localStorage.setItem("searched", searched);
  }

  saveLocal(local) {
    const locations = [...this.state.searched];
    locations.push(local);
    const unique = [...new Set(locations)]
    this.setState({ searched: unique });
  }

  currentSearch(searchResult) {
    this.setState({ current: searchResult });
  }

  getWeather(local) {
    fetchWeather(local).then(data => {
      if (data.status) {
        console.log(data.status);
        this.setState({ searchError: true });
      }
      console.log(data);
      this.currentSearch(data);
      this.saveLocal(data.name);
    });
  }
  clearError() {
    this.setState({ searchError: false, current: null });
  }
  error() {
    return (
      <h1>
        City not found <button onClick={this.clearError}>x</button>
      </h1>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-column">
          <Search getWeather={this.getWeather} />
          {!this.state.current || this.state.searchError
            ? null
            : <Card>
                <Results current={this.state.current} />
              </Card>}
          {this.state.searchError ? this.error() : null}
        </div>
        <div className="App-column">
          <Card width={200}>
            <SearchList
              list={this.state.searched}
              getWeather={this.getWeather}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
