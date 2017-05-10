(function () {
  'use strict';

// Базовый вариант с массивом имен пользователей
//   var users = ['singu', 'mango', 'devboss', 'ashlybae'];
//
//   function listUsers(data) {
//     for (var i = 0, max = data.length; i < max; i++) {
//       console.log(data[i]);
//     }
//   }
//
//   listUsers(users);
//
//   function findUser(data, name) {
//     for (var i = 0, max = data.length; i < max; i++) {
//       if (data[i] === name) {
//         return 'нашли такого юзера ' + name;
//       }
//     }
//
//     return 'такого юзера нету ' + name;
//   }
//
//   var result = findUser(users, 'mango');
//   console.log(result);
//
//   var result1 = findUser(users, 'йцуйцуйцу');
//   console.log(result1);
//
//   function addUser(data, user) {
//     data.push(user);
//   }
//
//   addUser(users, 'Ajax');
//   console.log(users);

// Сделаем функции методами обьекта, перенесем массив имен как поле обьекта
  // var app = {
  //   users: ['singu', 'mango', 'devboss', 'ashlybae'],
  //   listUsers: function () {
  //     for (var i = 0, max = this.users.length; i < max; i++) {
  //       console.log(this.users[i]);
  //     }
  //   },
  //   findUser: function (name) {
  //     for (var i = 0, length = this.users.length; i < length; i++) {
  //       if (this.users[i] === name) {
  //         console.log('success!');
  //         return;
  //       }
  //     }
  //     console.log('no such user');
  //   },
  //   addUser: function (name) {
  //     this.users.push(name);
  //   }
  // };
  //
  // app.listUsers();
  // app.findUser('mango');
  // app.findUser('qweqwe');
  //
  // app.addUser('Ajax');
  //
  // console.log(app);


// Усложняем, теперь каждый пользователь это целый обьект с полями, так мы сможем хранить много
//  информации о пользователе в одном месте
//
//   var app = {
//     users: [
//       {
//         login: 'dogo',
//         mail: 'mango@dog.net',
//         name: 'mango',
//         age: 2
//       },
//       {
//         login: 'coolguy123',
//         mail: 'coolguy123@dev.net',
//         name: 'Chelsey',
//         age: 24
//       }
//     ],
//     listUsers: function () {
//       for (var i = 0, length = this.users.length; i < length; i++) {
//         console.log(this.users[i]);
//       }
//     },
//     findUser: function (name) {
//       for (var i = 0, length = this.users.length; i < length; i++) {
//         if (this.users[i].name === name) {
//           return 'нашли ' + name;
//         }
//       }
//       return 'не нашли ' + name;
//     },
//     addUser: function (user) {
//       this.users.push(user);
//     },
//     searchAnyField: function (field, searchQuery) {
//       for (var i = 0, length = this.users.length; i < length; i++) {
//         if (searchQuery === this.users[i][field]) {
//           return 'success, found ' + searchQuery;
//         }
//       }
//       return 'fail, didn\'t find ' + searchQuery;
//     }
//   };

  // console.log(app.searchAnyField('login', 'dogo'));
  // console.log(app.searchAnyField('mail', 'dogqweqwo'));

  // app.listUsers();
  //
  // console.log(app.findUser('mango'));
  // console.log(app.findUser('qweqwe'));
  //
  // var newUser = {
  //   login: 'vasya',
  //   mail: 'gopnik@sarai.lol',
  //   name: 'lolay',
  //   age: 20
  // };
  //
  // app.addUser(newUser);
  //
  // console.log(app.users);

// Финальный вид обьекта, добавим поля приватных и публичных данных, добавим дополнительные поля, это для следующих вебинаров
//   var app = {
//     users: [
//       {
//         private: {
//           id: 0,
//           login: 'coolguy123',
//           mail: 'coolguy123@mail.dev',
//           pass: '12345',
//           phone: '(068)-120-00-12'
//         },
//         public: {
//           name: 'Chelsey',
//           age: 20,
//           location: 'Zambia',
//           avatar: 'path-to-avatar-file',
//           images: ['path-to-1.jpg', 'path-to-2.jpg', 'path-to-3.jpg'],
//           facebook: 'facebook link',
//           twitter: 'twitter link',
//           about: 'About Chelsey lorem ipsum dolor sit amet...'
//         }
//       },
//       {
//         private: {
//           id: 1,
//           login: 'mango',
//           mail: 'mango@mail.dev',
//           pass: '111',
//           phone: '123-12-12'
//         },
//         public: {
//           name: 'Mango',
//           age: 2,
//           location: 'USA',
//           avatar: 'path-to-avatar-file',
//           images: ['path-to-1.jpg', 'path-to-2.jpg', 'path-to-3.jpg'],
//           facebook: 'facebook link',
//           twitter: 'twitter link',
//           about: 'About Mango lorem ipsum dolor sit amet...'
//         }
//       }
//     ]
//   };

})();
