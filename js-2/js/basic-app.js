(function() {
  'use strict';

  var app = {
    users: [{
        private: {
          login: 'mangozedog',
          mail: 'mango@mail.dev',
          pass: '111',
          phone: '111-12-12'
        },
        public: {
          name: 'Mango',
          joinDate: 2017,
          location: 'Canada',
          profilePic: 'img/mango.jpg',
          friendsCount: 30,
          about: 'About Mango lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta laboriosam nisi odio quam qui similique velit vitae. Architecto consequatur quas sapiente suscipit. A deleniti dicta, incidunt maxime quibusdam quidem.',
          images: ['img/mango-1.jpg', 'img/mango-2.jpg', 'img/mango-3.jpg'],
          posts: ['first post', 'second post', 'third post', 'fourth post']
        }
      },
      {
        private: {
          login: 'coolguy123',
          mail: 'coolguy123@mail.dev',
          pass: '12345',
          phone: '120-00-12'
        },
        public: {
          name: 'Chelsey',
          joinDate: 2013,
          location: 'Zambia',
          profilePic: 'http://lorempixel.com/200/200/sports/5',
          friendsCount: 80,
          about: 'About Chelsey lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta laboriosam nisi odio quam qui similique velit vitae. Architecto consequatur quas sapiente suscipit. A deleniti dicta, incidunt maxime quibusdam quidem.',
          images: ['http://lorempixel.com/400/200/people', 'http://lorempixel.com/400/200/business', 'http://lorempixel.com/400/200/city'],
          posts: ['first post', 'second post', 'third post', 'fourth post']
        }
      }
    ],
    // $getUserData
    getUserData: function(login) {
      for (var i = 0, length = this.users.length; i < length; i++) {
        if (this.users[i].private.login === login) {
          return this.users[i].public;
        }
      }
      return null;
    },
    // $createUserProfile
    createUserProfile: function(data) {
      var profileContainer = createProfileContainer(),
        userCard = createUserCard(data),
        posts = createPosts(data),
        gallery = createGallery(data);

      profileContainer.appendChild(userCard);
      profileContainer.appendChild(posts);
      profileContainer.appendChild(gallery);

      return profileContainer;

      // $createProfileContainer
      function createProfileContainer() {
        var container = document.createElement('div');
        container.classList.add('user-profile');

        return container;
      }

      // $createUserCard
      function createUserCard(data) {
        console.log(data);
        var container = document.createElement('div'),
          img = document.createElement('img'),
          content = document.createElement('div'),
          contentHeader = document.createElement('h2'),
          meta = document.createElement('div'),
          metaDate = document.createElement('p'),
          metaLoc = document.createElement('p'),
          descr = document.createElement('p'),
          friends = document.createElement('a'),
          friendsIcon = document.createElement('i');

        // container
        container.classList.add('user-card');

        // profile image
        img.classList.add('user-card__img');
        img.setAttribute('src', data.profilePic);
        img.setAttribute('alt', 'picture of ' + data.name);

        // user card content
        content.classList.add('user-card__content');

        // content header
        contentHeader.classList.add('user-card__name');
        contentHeader.appendChild(document.createTextNode(data.name));

        // content meta data
        meta.classList.add('user-card__meta');
        metaDate.classList.add('user-card__date');
        metaDate.appendChild(document.createTextNode('Joined: ' + data.joinDate));
        metaLoc.classList.add('user-card__loc');
        metaLoc.appendChild(document.createTextNode('Location: ' + data.location));

        meta.appendChild(metaDate);
        meta.appendChild(metaLoc);

        // content user description
        descr.classList.add('user-card__descr');
        descr.appendChild(document.createTextNode(data.about));

        // content friends
        friends.classList.add('user-card__friends');
        friends.setAttribute('href', '#');
        friendsIcon.classList.add('user-card__icon');

        friends.appendChild(friendsIcon);
        friends.appendChild(document.createTextNode(data.friendsCount + ' Friends'));

        content.appendChild(contentHeader);
        content.appendChild(meta);
        content.appendChild(descr);
        content.appendChild(friends);

        container.appendChild(img);
        container.appendChild(content);

        return container;
      }

      // $createPosts
      function createPosts(data) {
        var container = document.createElement('div'),
          header = document.createElement('h2');

        container.classList.add('posts');
        header.classList.add('posts__header');
        header.appendChild(document.createTextNode('Recent posts'));

        container.appendChild(header);

        // var frag = document.createDocumentFragment();
        for (var i = 0, length = data.posts.length; i < length; i++) {
          // var post = context.createNode('div', 'posts__item', null, data.posts[i]);

          var post = document.createElement('div');
          post.classList.add('posts__item');
          post.appendChild(document.createTextNode(data.posts[i]));

          // frag.appendChild(post);
          container.appendChild(post);
        }

        // container.appendChild(frag);

        return container;
      }

      // $createGallery
      function createGallery(data) {
        var container = document.createElement('div');
        container.classList.add('gallery');

        for (var i = 0, length = data.images.length; i < length; i++) {
          var el = document.createElement('img');
          el.classList.add('gallery__item');
          el.setAttribute('src', data.images[i]);
          el.setAttribute('alt', 'gallery image');

          container.appendChild(el);
        }

        return container;
      }
    },
    // $showUserProfile
    showUserProfile: function(login) {
      var userData = this.getUserData(login);

      if (userData) {
        var container = document.querySelector('#root');
        container.appendChild(this.createUserProfile(userData));
      } else {
        console.log('user ' + login + ' not found!');
      }
    },
    // $createControls
    createControls: function() {
      var container = document.createElement('div'),
        select = document.createElement('select'),
        btn = document.createElement('button');

      container.classList.add('app-ctrls');
      select.classList.add('app-ctrls__select');

      for (var i = 0, length = this.users.length; i < length; i++) {
        var el = document.createElement('option');
        el.appendChild(document.createTextNode(this.users[i].private.login));

        select.appendChild(el);
      }

      btn.classList.add('app-ctrls__btn');
      btn.appendChild(document.createTextNode('Show profile'));

      btn.onclick = function() {
        // console.log('this: ', this);

        var select = document.querySelector('.app-ctrls__select'),
          value = select.options[select.selectedIndex].text,
          profile = document.querySelector('.user-profile');

        if (profile === null) {
          this.showUserProfile(value);
        } else {
          // profile.remove();
          var root = document.getElementById('root');
          root.removeChild(profile);
          this.showUserProfile(value);
        }
      }.bind(this);

      container.appendChild(select);
      container.appendChild(btn);

      return container;
    },
    // $init
    init: function() {
      var container = document.querySelector('#root');

      container.appendChild(this.createControls());
    }
  };

  app.init();
})();
