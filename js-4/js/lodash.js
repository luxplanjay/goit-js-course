(function() {
  'use strict';


  //-- $forEach
  // var arr = [1, 2, 3, 4],
  //   newArr = [];
  //
  // _.forEachRight(arr, function(item) {
  //   newArr.push(item * 2);
  // });
  // console.log('newArr: ', newArr);


  //-- $map
  // var arr = _.map([{id: 1}, {id: 2}, {id: 3}], 'id');
  // console.log(arr);

  // var db = [
  //   {name: 'apples', count: 100},
  //   {name: 'grapes', count: 50},
  //   {name: 'oranges', count: 200}
  // ];
  //
  // var names = _.map(db, function (item) {
  //   return item.name;
  // });
  // console.log('names: ', names);
  //
  // var sugar = _.map(db, 'name');
  // console.log('sugar: ', sugar);

  // var fruits = [
  //   {name: 'apples', count: 100},
  //   {name: 'grapes', count: 50},
  //   {name: 'oranges', count: 200}
  // ];
  //
  //   var list = document.createElement('ul');
  //
  // var items = _.map(fruits, function (item, index) {
  //   return  '<li ' + 'id=' + index + '>' + item.name + '</li>';
  // });
  //
  //
  // _.forEach(items, function (item) {
  //   list.innerHTML += item;
  // });
  //
  // document.getElementById('root').appendChild(list);



  // -- $filter
  // var data = [1, 2, 3, 4, 5, 6];
  //
  // var filter = _.filter(data, function (item) {
  //   return item < 4;
  // });
  //
  // console.log('resulting filter array: ', filter);
  //
  // var reject = _.reject(data, function (item) {
  //   return item < 4;
  // });
  // console.log('resulting reject array: ', reject);

  // var data = [
  //   {id: 1, name: 'alex', isCool: true},
  //   {id: 2, name: 'singu', isCool: false},
  //   {id: 3, name: 'mango', isCool: true}
  // ];
  //
  // var arrID = _.filter(data, function (item) {
  //   return item.isCool;
  // });
  // console.log('id\'s: ', arrID);
  //
  // var arrCool = _.filter(data, function (item) {
  //   return item.isCool;
  // });
  // console.log('isCool: ', arrCool);
  //
  // var user = _.filter(data, ['name', 'alex']);
  // console.log(user);


  //--- $find
  // var arr = [1, 2, 3, 4, 5];
  //
  // var result = _.find(arr, function (item) {
  //   return item > 2;
  // });
  // console.log(result);
  //
  // var data = [
  //   {name: 'singu', age: 20},
  //   {name: 'mango', age: 3},
  //   {name: 'chelsey', age: 2}
  // ];

  // var userFirst = _.find(data, function (item) {
  //   return item.age < 10;
  // });
  // console.log('userFirst: ', userFirst);
  //
  // var userLast = _.findLast(data, function (item) {
  //   return item.age < 10;
  // });
  // console.log('userLast: ', userLast);
  //
  // var user = _.find(data, {name: 'mango'});
  // console.log('user: ', user);


  //-- $includes
  // var images = [
  //   {src: '', alt: 'summer vacation'},
  //   {src: '', alt: 'winter vacation'},
  //   {src: '', alt: 'hot summer'},
  //   {src: '', alt: 'cool winter'},
  //   {src: '', alt: 'winter and summer combined'}
  // ];
  //
  // var summerPics = _.filter(images, function (item) {
  //   return _.includes(item.alt, 'summer');
  // });
  // console.log(summerPics);
  //
  // var alts = _.map(summerPics, 'alt');
  // console.log(alts);

  //--  $without $pull
  // var arr = [1, 2, 3, 4 ,5];
  //
  // var result = _.without(arr, 1, 2, 3);
  // console.log('result without: ', result);
  //
  // _.pull(arr, 1, 2 ,3);
  // console.log('pull arr: ', arr);


  //-- $remove
  // var users = [
  //   {id: 1, name: 'alex', isCool: false},
  //   {id: 2, name: 'singu', isCool: true},
  //   {id: 3, name: 'mango', isCool: true}
  // ];
  //
  // _.remove(users, {id: 2});
  // console.log(users);


  //-- $every $some
//   var users = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: false},
//     {id: 3, isActive: true},
//     {id: 4, isActive: true}
// ];
//
// var areAcrive = _.every(users, {'isActive': true});
// console.log('areAcrive: ', areAcrive);
//
//   var users = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false},
//     {id: 4, isActive: true}
//  ];
//
// var result = _.some(users, {'isActive': true});
// console.log(result);


//-- $reduce
// var arr = [1, 2, 3, 4];
//
// var result = _.reduce(arr, function (acc, item) {
//   return acc + item;
// }, 100);
// console.log('result: ', result);

// var cart = [
//   {name: 'mouse', price: 300},
//   {name: 'tv', price: 2500},
//   {name: 'cpu', price: 1500}
// ];
//
// var result = _.reduce(cart, function (acc, item) {
//   return acc + item.price;
// }, 0);
// console.log('total amount: ', result);


//-- $sortBy $groupBy
// var users = [
//   {name: 'singu', joined: 2012},
//   {name: 'mango', joined: 2006},
//   {name: 'ajax', joined: 2017},
//   {name: 'chelsey', joined: 2009}
// ];

// var result = _.sortBy(users, function (item) {
//   return item.joined;
// });
// console.log(result);
//
// var result = _.sortBy(users, 'joined');
// console.log(result);
//

// var users = [
//   {name: 'singu', joined: 2012, isActive: false},
//   {name: 'mango', joined: 2006, isActive: true},
//   {name: 'ajax', joined: 2017, isActive: false},
//   {name: 'chelsey', joined: 2009, isActive: true}
// ];
//
// var result = _.groupBy(users, {'isActive': true});
// console.log(result);


//-- $times $random
// var numbers = [];
//
// _.times(5, function () {
//   numbers.push(_.random(1, 100, true));
// });
// console.log(numbers);
//
//-- $cloneDeep
// var data = {
//   title: 'cool movies',
//   movies: [ {name: 'first movie'}, {name: 'second movie'}, {name: 'third movie'}]
// };
//
// var clone = _.cloneDeep(data);
//
// _.forEach(clone.movies, function (item, index) {
//   item.name = item.name + index;
// });
//
// console.log('original: ', data);
// console.log('clone: ', clone);


//--- $has $get $set
// var data = { a: [ { b: { c: 3 } } ] };
//
// console.log( _.has(data, 'a[0].b.c') );
//
// console.log( _.get(data, 'a[0].b.c') );
//
// _.set(data, 'a[0].b.a', 4);
//
// console.log( data );


//-- $flatten $flattenDeep $flattenDepth
// var arr = [1, 2, [3, 4]];
// console.log( _.flatten(arr) );

// var arr = [1, [2, [3, [4]], 5]];
// console.log( _.flatten(arr) );
// console.log( _.flattenDeep(arr) );
//
// var arr = [1, [2, [3, [4]], 5]];
// console.log( _.flattenDepth(arr, 1) );


//-- $chain
// var val = _.chain([{id: 2}, {id: 4}, {id: 1}, {id: 3}, {id: 5}, {id: 5}, {id: 3}, {id: 1}])
// .map('id')
// .uniq()
// .sortBy()
// .value();
//
// console.log(val);
//
// var users = [
//   {name: 'singu', joined: 2012},
//   {name: 'mango', joined: 2006},
//   {name: 'ajax', joined: 2017},
//   {name: 'chelsey', joined: 2009}
// ];
//
// var firstJoined = _.chain(users)
// .sortBy('joined')
// .map(function (item) {
//   return item.name + ' joined in ' + item.joined;
// })
// .head()
// .value();
//
// console.log(firstJoined);

//--- $EXTRAS

//--- $camelCase
// console.log( _.camelCase('cool-web_dev--stuff') );

//-- $uniq
// console.log( _.uniq([1, 2, 3, 2, 1]) );


//-- $maxBy
// var users = [{id: 1}, {id: 2}, {id: 3}];
// console.log( _.maxBy(users, 'id') );


//-- $assign $extend
// function Foo() {
//   this.a = 1;
// }
//
// function Bar() {
//   this.c = 3;
// }
//
// Foo.prototype.b = 2;
// Bar.prototype.d = 4;
//
// console.log( _.assign({a: 0}, new Foo(), new Bar()) );
// console.log( _.extend({a: 0}, new Foo(), new Bar()) );


//-- $uniqueId
// console.log( _.times(5, _.uniqueId.bind(null, 'item_')) );
})();
