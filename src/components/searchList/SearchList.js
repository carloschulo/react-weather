import React, { Component } from "react";
import "./searchList.css";

class SearchList extends Component {
  fetchWeather(city) {
    this.props.getWeather(city);
  }
  render() {
    return (
      <div className="search-list">
        <p>Search list: </p>
        <div className="list-group">
          {this.props.list.map((city, index) => (
            <button
              key={index}
              className="list-group-item"
              onClick={() => this.fetchWeather(city)}
              disabled={this.props.isDisabled}
            >
              {index + 1}. {city}{" "}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchList;
