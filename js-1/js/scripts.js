// (function () {
//   'use strict';
//
//   var db = {
//     fruits: [
//       {
//         name: 'apples',
//         count: 800,
//         price: 5
//       },
//       {
//         name: 'grapes',
//         count: 500,
//         price: 10
//       }
//     ],
//     meat: [
//       {
//         name: 'chicken',
//         count: 50,
//         price: 20
//       },
//       {
//         name: 'rabbit',
//         count: 30,
//         price: 40
//       }
//     ]
//   };
//
//
//   function searchDatabase(dBase, str) {
//     for (var key in dBase) {
//       for(var i = 0, max = dBase[key].length; i < max; i++) {
//         if(dBase[key][i].name === str) {
//           return dBase[key][i];
//         }
//       }
//     }
//
//     return null;
//   }
//
//   var searchQuery = prompt('Введите название продукта для поиска: ', '');
//   var searchResult = searchDatabase(db, searchQuery.toLowerCase());
//
//   if (searchResult) {
//     console.log(searchResult);
//   } else {
//     console.log('На складе такого продукта нет!');
//   }
// })();


(function () {
  'use strict';

  var app = {
    users: [
      {
        private: {
          id: 0,
          login: 'coolguy123',
          mail: 'coolguy123@mail.dev',
          pass: 12345,
          phone: '(068)-120-00-12'
        },
        public: {
          name: 'Chelsey',
          age: 20,
          location: 'Zambia',
          avatar: 'link-to-avatar-file',
          images: ['path-to-1.jpg', 'path-to-2.jpg', 'path-to-3.jpg'],
          facebook: 'facebook link',
          twitter: 'twitter link',
          about: 'lorem ipsum dolor sit amet...'
        }
      },
      {
        private: {
          id: 1,
          login: 'mango',
          mail: 'mango@mail.dev',
          pass: 111,
          phone: '123-12-12'
        },
        public: {
          name: 'Mango',
          age: 2,
          location: 'USA',
          avatar: 'link-to-avatar-file',
          images: ['path-to-1.jpg', 'path-to-2.jpg', 'path-to-3.jpg'],
          facebook: 'facebook link',
          twitter: 'twitter link',
          about: 'lorem ipsum dolor sit amet...'
        }
      }
    ]
  };

  console.log(app);

  function listUsers(database) {
    for (var key in database) {
      for (var i = 0, length = database[key].length; i < length; i++) {
        console.log(database[key][i].private.login);
      }
    }
  }

  listUsers(app);

  function searchDatabase(db, mail) {
    for (var key in db) {
      for (var i = 0, length = db[key].length; i < length; i++) {
        if (db[key][i].private.mail === mail) {
          return db[key][i];
        }
      }
    }

    return null;
  }

  var result = searchDatabase(app, 'mango@mail.dev');

  if (result) {
    console.log(result);
  } else {
    console.log('no such user in database!');
  }
})();
