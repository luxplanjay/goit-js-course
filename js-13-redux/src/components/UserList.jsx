import React from 'react';
import shortid from 'shortid';

const UserList = ({users}) => (
  <ul className="collection">
    {users.map(user => (
      <li className="collection-item" key={shortid.generate()}>
        <p>LOGIN: {user.login}</p>
        <p>PASS: {user.pass}</p>
      </li>
    ))}
  </ul>
);

export default UserList;
