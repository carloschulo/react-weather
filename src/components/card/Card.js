import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className='card' style={{width: `${props.width}px`}}>
    {/* <p>The Weather for today in {props.currentSearch.name} is: </p>
     <p>Temperature: {props.currentSearch.main.temp}</p>*/}
     {props.children}
    </div>
  );
};

export default Card;