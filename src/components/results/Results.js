import React from "react";
import moment from "moment";
import "./results.css";

const Results = props => {
  return (
    <div className="results">
      <h2>
        {props.current.name}
      </h2>
      <div>
        {moment().format("MMMM Do YYYY, h:mm a")}
      </div>
      <div className="text-trans">
        {props.current.weather[0].description}
      </div>
      <h3>
        {props.current.main.temp} °F
      </h3>
      <h3>
        {props.current.main.humidity}% Humidity
      </h3>
      
    </div>
  );
};

export default Results;
