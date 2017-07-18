export const forumAPI = {
  posts: [
    {
      id: 0,
      name: 'Mango',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at consequuntur dicta distinctio dolorem eius impedit, laborum molestias officia optio quia recusandae rem repellendus sint vel velit vitae voluptatum.',
      time: new Date().toLocaleDateString()
    },
    {
      id: 1,
      name: 'Poly',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at consequuntur dicta distinctio dolorem eius impedit, laborum molestias officia optio quia recusandae rem repellendus sint vel velit vitae voluptatum.',
      time: new Date().toLocaleDateString()
    },
  ],
  getPosts() {
    return this.posts;
  },
  setPost(post) {
    this.posts = [...this.posts, post];
  }
};
