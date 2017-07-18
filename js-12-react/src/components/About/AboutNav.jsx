import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutNav = ({match}) => (
  <ul className="collection z-depth-3">
    <li>
      <NavLink className="collection-item" activeClassName="blue" to={`${match.url}/team`}>Team</NavLink>
    </li>
    <li>
      <NavLink className="collection-item" activeClassName="blue" to={`${match.url}/company`}>Company</NavLink>
    </li>
    <li>
      <NavLink className="collection-item" activeClassName="blue" to={`${match.url}/contacts`}>Contacts</NavLink>
    </li>
  </ul>
);

export default AboutNav;
