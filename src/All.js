import React from 'react';
import all_product from './Assets/all_product.js'; // Make sure this path is correct
import './All.css';
const All = () => {
  return (
    <div className='mainbdy'>
      <ul> {/* Wrap list items in <ul> */}
        {all_product.map((item, index) => (
          <li key={index}> {/* Always use unique key */}
            <h2>{item.name}</h2> {/* Assuming 'name' is a key */}
            <img src={item.image} alt={item.name} /> {/* Assuming 'img' is the key */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
