import React from 'react';

const Weather = (props) => {
  console.log('props in weather: ', props.currentSearch)
  return (
    <div>
      weather
      {props.currentSearch.name}
    </div>
  );
};

export default Weather;