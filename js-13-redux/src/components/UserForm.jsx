import React from 'react';

const UserForm = ({onAdd, onFilter}) => {
  let loginInput = null;
  let passInput = null;
  let filterInput = null;

  const handleClick = () => {
    onAdd({
      login: loginInput.value,
      pass: passInput.value
    });
  };

  const handleChange = () => {
    onFilter(filterInput.value);
  };

  return (
    <div className="card-panel center-align">
      <input type="text" ref={x => {loginInput = x;}}/>
      <input type="text" ref={x => {passInput = x;}}/>
      <input type="text" ref={x => {filterInput = x;}} onChange={handleChange}/>
      <button className="btn" onClick={handleClick}>add user</button>
    </div>
  );
};


export default UserForm;
