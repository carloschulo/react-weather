import React from 'react';
import './searchList.css';

const SearchList = (props) => {
  // console.log(props.list)
  return (
    <div className='search-list'>
      <p>Search list: </p>
      <div className='list-group'>
        {props.list.map( (city, index) => (
          <button key={index} className='list-group-item'>{index + 1}. {city} </button>
        ))}
      </div>
    </div>
  );
};

export default SearchList;