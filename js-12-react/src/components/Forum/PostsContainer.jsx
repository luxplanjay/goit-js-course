import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Post from './Post';

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-panel z-depth-2">
        {this.props.posts.map(post =>
          <Post
            key={uuid.v4()}
            name={post.name}
            msg={post.msg}
            time={post.time}
          />
        )}
      </div>
    );
  }
}

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostsContainer;
