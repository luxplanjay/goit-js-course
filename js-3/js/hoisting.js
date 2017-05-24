// Hoisting - поднятие переменных
// Итого - в 99% случаев обьявляйте переменные в начале области видимости

// (function () {
//   'use strict';
//
//   var val = 0;
//
//   console.log(val);
//
//   var outerScope = function () {
//     console.log(val);
//      var val = 1;
//     console.log(val);
//
//     var innerScope = function () {
//       console.log(val);
//        var val = 2;
//     };
//
//     innerScope();
//     console.log(val);
//   };
//
//   outerScope();
//   console.log(val);
// })();
