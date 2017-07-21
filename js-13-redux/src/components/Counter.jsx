import React from 'react';

const Counter = ({value, onAdd, onSub}) => (
  <div className="container card-panel center-align">
    <h1>{value}</h1>
    <button className="btn" onClick={onAdd}>+</button>
    <button className="btn" onClick={onSub}>-</button>
  </div>
);

export default Counter;
