// (function () {
//   'use strict';
//
//   var data = 'LET ME WIN!!!!! BabyRage';
//
//   $.ajax({
//     url: 'https://api.myjson.com/bins/r4307',
//     dataType: 'json',
//     type: 'GET',
//     success: function (response) {
//       console.log(response); // {name: "first JSON for promise #1"}
//       data = response;
//     }
//   });
//
//   console.log(data); // 'LET ME WIN!!!!! BabyRage'
// })();

// (function() {
//   'use strict';
//
//   var promise = new Promise(function(resolve, reject) {
//
//     $.ajax({
//       url: 'https://api.myjson.com/bins/r4307',
//       dataType: 'json',
//       type: 'GET',
//       success: resolve,
//       error: reject
//     });
//   });
//
//   promise
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// })();

// (function() {
//   'use strict';
//
//   function getData(url) {
//
//     return new Promise(function(resolve, reject) {
//       $.ajax({
//         url: url,
//         dataType: 'json',
//         type: 'GET',
//         success: resolve,
//         error: reject
//       });
//     });
//   }
//
//   var promiseA = getData('https://api.myjson.com/bins/r4307'),
//     promiseB = getData('https://api.myjson.com/bins/zh77f');
//
//   promiseA
//     .then(function(data) {
//       console.log(data);
//     }).catch(function(error) {
//       console.log(error);
//     });
//
//   promiseB
//     .then(function(data) {
//       console.log('B: ', data);
//     }).catch(function(error) {
//       console.log(error);
//     });
//
//   Promise.all([promiseA, promiseB])
//     .then(function(data) {
//       console.log(data[0].name + ' and ' + data[1].name);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// })();
