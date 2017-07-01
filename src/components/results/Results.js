import React from 'react';
import './results.css'

const Results = (props) => {
  return (
    <div className='results'>
      Results:
      <br/>
      {props.current.name}
      <br/>
      {props.current.main.temp}
    </div>
  );
};

export default Results;