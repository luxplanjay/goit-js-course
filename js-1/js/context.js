/**
 * Created by Zerk on 07-May-17.
 */

(function () {
'use strict';
//   // this
//
//   // in global(window) context
//   function foo() {
//     console.log(this);
//   }
//
//   foo();
//
//   //iife
//   (function () {
//     console.log(this);
//   })();
//
//   // in object context-1
//   var dog = {
//     name: 'Mango',
//     getName: function () {
//       console.log(this.name);
//     }
//   };
//
//   dog.getName();
//
//   // in object context-2
//   function getName() {
//     return this.name;
//   }
//
//   var dog = {name: 'Mango'},
//     cat = {name: 'Ajax'};
//
//   dog.get = getName;
//   console.log(dog.get());
//
//   cat.get = getName;
//   console.log(cat.get());

// call apply bind

// function add(c, d) {
//   console.log(this.a + this.b + c + d);
// }

// add(3,4);

// function add(c, d) {
//   console.log(this.a + this.b + c + d);
// }
//
// var ten = {a: 1, b: 2};
//
// add.call(ten, 3, 4);
// add.apply(ten, [3,4]);
})();
