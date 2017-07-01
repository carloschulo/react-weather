import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className='card' style={{width: `${props.width}px`}}>
     {props.children}
    </div>
  );
};

export default Card;