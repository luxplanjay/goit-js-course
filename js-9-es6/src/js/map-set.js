// // $map;
//
// let movies = new Map();
//
// movies.set('cool', { name: 'Training Day' });
// movies.set('space', { name: 'A Space Odyssey'} );
// movies.set('det', { name: 'Usual Suspects'} );
//
//
// console.log('movies: ', movies);
//
// console.log('movies.get(\'space\'): ', movies.get('space'));
//
// movies.delete('det');
//
// console.log(movies);
//
// movies.clear();
// console.log(movies);
//
// console.log('movies.has(\'cool\'): ', movies.has('cool') );
//
// console.log('movies.size: ', movies.size);
//
// for (let key of movies.keys()) {
//   console.log('key: ', key);
// }
//
// for (let value of movies.values()) {
//   console.log('value: ', value);
// }
//
// for (let entry of movies.entries()) {
//   console.log('entry: ', entry);
// }
//
// movies.forEach((value, key, map) => {
//   console.log('value: ', value);
//   console.log('key: ', key);
//   console.log('map: ',  map);
// });
//
// // $set;
//
// let set = new Set([11, 2, 3, 21, 15]);
//
// console.log(set);
//
// console.log(set.size);
//
//
// set.add(12);
// console.log(set);
//
// set.delete(3);
// console.log(set);
//
// console.log('set.has(21): ', set.has(21));
// console.log('set.has(99): ', set.has(99));
//
// set.clear();
// console.log(set);
//
// for (let item of set) {
//   console.log(item);
// }
//
// set.forEach( (val, sameval, set) => {
//   console.log(val);
//   console.log(set);
// });
