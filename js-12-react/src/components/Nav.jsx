import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import uuid from 'uuid';

const items = [
  {title: 'home', link: '/', icon: 'home'},
  {title: 'forum', link: '/forum', icon: 'list'},
  {title: 'gallery', link: '/gallery', icon: 'view_quilt'},
  {title: 'about', link: '/about', icon: 'help'}
];

// const Nav = () => (
//   <ul>
//     <li>
//       <NavLink activeClassName="red" exact to="/">home</NavLink>
//     </li>
//     <li>
//       <NavLink activeClassName="red" to="/forum">forum</NavLink>
//     </li>
//     <li>
//       <NavLink activeClassName="red" to="/about">about</NavLink>
//     </li>
//   </ul>
//
// );

const Nav = () => (
  <nav className="z-depth-3">
    <ul className="nav-wrapper brown">
      {items.map(item => (
        <li key={uuid.v4()}>
          <NavLink activeClassName="teal" exact to={item.link}>
            <i className={'material-icons left'}>{item.icon}</i>
            {item.title.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;

