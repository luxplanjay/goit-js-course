// (function() {
//   'use strict';
//
//   var promiseCount = 0;
//
//   function addPromise() {
//     var thisPromiseCount = ++promiseCount;
//
//     console.log(thisPromiseCount + ' Started - Sync code started');
//
//     var promise = new Promise(function(resolve, reject) {
//       console.log(thisPromiseCount + ' Promise started - Async code started');
//
//       var timeout = Math.random() * 2000 + 1000;
//
//       setTimeout(function() {
//         console.log(thisPromiseCount + ' Timeout - ' + timeout);
//         resolve(thisPromiseCount);
//       }, timeout);
//     });
//
//     promise
//       .then(function(val) {
//         console.log(val + ' Promise fulfilled - Async code finished');
//       })
//       .catch(function(error) {
//         console.log('Error in promise - ' + error);
//       });
//
//     console.log(thisPromiseCount + ' Promise made - Sync code finished');
//   }
//
//   addPromise();
//   addPromise();
// })();
