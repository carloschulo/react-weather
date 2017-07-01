import React from 'react';
import './searchList.css';

const SearchList = (props) => {
  console.log(props.list)
  return (
    <div className='search-list'>
      <p>Search list: </p>
      <ul>
        {props.list.map( (city, index) => (
          <li key={index}> {city} </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;