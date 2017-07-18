import React from 'react';

import PostsContainer from '@/components/Forum/PostsContainer';
import PostForm from '@/components/Forum/PostForm';

import {forumAPI} from '@/services/api.js';

class ForumPage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      posts: forumAPI.getPosts()
    });
  }

  onFormSubmit(post) {
    forumAPI.setPost(post);

    this.setState({
      posts: forumAPI.getPosts()
    });
  }

  render() {
    return (
      <div>
        <h1>Forum Page</h1>
        <PostsContainer posts={this.state.posts}/>
        <PostForm onFormSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

export default ForumPage;
