import React from 'react';
import PropTypes from 'prop-types';

import avatar from './assets/avatar.jpg';

const Post = ({name, msg, time}) => (
  <div className="card-panel z-depth-3">
    <img className="circle" src={avatar} alt="avatar"/>
    <div>{time}</div>
    <div><span className="blue-text">{name}</span> created a post</div>
    <p>{msg}</p>
  </div>
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Post;
