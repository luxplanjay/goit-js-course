(function() {
  'use strict';

  // 'hiring', 'location', 'order'
  var menuData = {
      title: 'Eat it createElement, templates rule!',
      items: ['home', 'about', 'services', 'contacts', 'hiring', 'location', 'order']
    },
    articlesData = [{
        title: 'Trump for president',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '#',
        type: 'political',
        date: '20.05.2019'
      },
      {
        title: 'Cold fusion research',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '#',
        type: 'science',
        date: '16.01.1998'
      },
      {
        title: 'PETA enforces obidience',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '#',
        type: 'nature',
        date: '02.06.1854'
      }
    ],
    parent = document.getElementById('container');


  // $menu @lodash
  // var source = document.getElementById('menu').textContent,
  //   template = _.template(source, {data: menuData});
  //
  // parent.innerHTML += template(menuData);

  // $articles @lodash
  // var source = document.getElementById('article-tpl-2').textContent,
  //   template = _.template(source);
  //
  // _.forEach(articlesData, function(item) {
  //   parent.innerHTML += template(item);
  // });
  // $articles @lodash built-in loop
  // parent.innerHTML += template({data: articlesData});



  // $menu @handlebars
  // var source = document.getElementById('menu-hbs').textContent,
  //   template = Handlebars.compile(source);
  //
  // parent.innerHTML += template(menuData);

  // @articles @handlebars
  // var source = document.getElementById('article-tpl-hbs').textContent,
  // template = Handlebars.compile(source);
  //
  // parent.innerHTML += template(articlesData);
})();
