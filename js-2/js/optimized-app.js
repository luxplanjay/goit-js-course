/**
 * Created by Zerk on 16-May-17.
 */
(function () {
  'use strict';

  var app = {
    users: [
      {
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
    getUserData: function (login) {
      for (var i = 0, length = this.users.length; i < length; i++) {
        if (this.users[i].private.login === login) {
          return this.users[i].public;
        }
      }
      return null;
    },
    // $createUserProfile
    createUserProfile: function (data) {
      var profileContainer = createProfileContainer(this),
        userCard = createUserCard(data, this),
        posts = createPosts(data, this),
        gallery = createGallery(data);

      profileContainer.append(userCard, posts, gallery);

      return profileContainer;

      // $createProfileContainer
      function createProfileContainer(context) {
        //this = undefined
        return context.createNode('div', 'user-profile', null, null);
      }

      // $createUserCard
      function createUserCard(data, context) {
        var container = context.createNode('div', 'user-card', null, null),
          img = context.createNode('img', 'user-card__img', [{name: 'src', value: data.profilePic}, {name: 'alt', value: 'picture of ' + data.name}], null),
          content = context.createNode('div', 'user-card__content', null, null),
          contentHeader = context.createNode('h2', 'user-card__name', null, data.name),
          meta = context.createNode('div', 'user-card__meta', null, null),
          metaDate = context.createNode('p', 'user-card__date', null, 'Joined: ' + data.joinDate),
          metaLoc = context.createNode('p', 'user-card__loc', null, 'Location: ' + data.location),
          descr = context.createNode('p', 'user-card__descr', null, data.about),
          friends = context.createNode('a', 'user-card__friends', [{name: 'href', value: '#'}], null),
          friendsIcon = context.createNode('i', 'user-card__icon', null, null);

        meta.append(metaDate, metaLoc);
        friends.append(friendsIcon, document.createTextNode(data.friendsCount + ' Friends'));
        content.append(contentHeader, meta, descr, friends);
        container.append(img, content);

        return container;
      }

      // $createPosts
      function createPosts(data, context) {
        var container = context.createNode('div', 'posts', null, null),
          header = context.createNode('h2', 'posts__header', null, 'Recent posts');

        var frag = document.createDocumentFragment();
        for (var i = 0, length = data.posts.length; i < length; i++) {
          var post = context.createNode('div', 'posts__item', null, data.posts[i]);

          frag.appendChild(post);
        }

        container.append(header, frag);

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
    showUserProfile: function (login) {
      var userData = this.getUserData(login);

      if (userData) {
        var container = document.querySelector('#root');
        container.appendChild(this.createUserProfile(userData));
      } else {
        console.log('user ' + login + ' not found!');
      }
    },
    // $createControls
    createControls: function () {
      var container = this.createNode('div', 'app-ctrls', null, null),
        select = this.createNode('select', 'app-ctrls__select', null, null),
        btn = this.createNode('button', 'app-ctrls__btn', null, 'Show profile');

      for (var i = 0, length = this.users.length; i < length; i++) {
        var el = this.createNode('option', 'select-item', null, this.users[i].private.login);

        select.appendChild(el);
      }

      // при клике на кнопку выбирается текущая опция в селекте и передается в showUserProfile
      btn.onclick = function () {
        // console.log('this: ', this);

        var select = document.querySelector('.app-ctrls__select'),
          value = select.options[select.selectedIndex].text,
          profile = document.querySelector('.user-profile');

        if (profile === null) {
          this.showUserProfile(value);
        } else {
          profile.remove();
          this.showUserProfile(value);
        }
      }.bind(this);

      container.append(select, btn);

      return container;
    },
    // $createNode
    createNode: function (type, cls, attributes, textNode) {
      var el = document.createElement(type);

      if (cls && (typeof cls === 'string')) {
        el.classList.add(cls);
      }

      if (attributes && (typeof attributes === 'object')) {
        for (var i = 0; i < attributes.length; i++) {
          el.setAttribute(attributes[i].name, attributes[i].value);
        }
      }

      if (textNode && (typeof textNode === 'string')) {
        el.appendChild(document.createTextNode(textNode));
      }

      return el;
    },
    // $init
    init: function () {
      var container = document.querySelector('#root');

      container.appendChild(this.createControls());
    }
  };

  app.init();
})();
