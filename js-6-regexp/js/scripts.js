'use strict';

// $teaser
// var string = 'credit card number: 1234-2521-2315',
//   regV = /\b[0-9]{4}-[0-9]{4}-[0-9]{4}\b/g;
//
// console.log(string.match(regV));

// $literals
// var string = 'windows',
//   regV = /ind/;
//
// console.log(string.match(regV));

// $flags
// var string = 'Is that all there is?',
//  regV = /is/ig;
//
//
// console.log(string.match(regV));

// $sets
// var string = 'random text with a number - 5',
//  regV = /[0-9]/g;
//
// console.log(string.match(regV));

// $boundaries
// var string = '1 random text 2',
//   regV = /[0-9]$/;
//
// console.log(string.match(regV));

// $classes
// var string = '12345, www. www h - whwhwh',
//  regV = /\w/g;
//
// console.log(string.match(regV));

// $quantity
// var string  = '92345 123 243 467 5234 987',
// regV = /\b[0-9]{3}\b/g;
//
// console.log(string.match(regV));
//
// var pattern = /\d+/g;
//
// console.log(string.match(pattern));


// $METHODS

// $match
// var string = 'just a random string',
// regV = /\w+/g;
//
// console.log(string.match(regV));

// $replace
// var input = document.createElement('input'),
//   output = document.createElement('p'),
//   userData = {
//     name: 'Mango',
//     age: 2,
//     mood: 'happy'
//   };
//
// document.getElementById('root').append(input, output);
//
// input.addEventListener('keyup', function() {
//   output.textContent = this.value.replace(
//     /\{\{(\w*)\}\}/g, function (match, value) {
//       return userData[value];
//     }
//   );
// });

// $test
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor singu@hotmail.com ut labore et',
//   regV = /\w+@\w+\.\w+/;
//
// console.log( regV.test(string) );

// $exec

// var string = 'just some random string',
// regV = /\w+/g,
// match;
//
// console.log(string.match(regV) );

// console.log( regV.exec(string) );
// console.log( regV.exec(string) );
// console.log( regV.exec(string) );
// console.log( regV.exec(string) );

// while(match = regV.exec(string)) {
//   console.log(match[0] + ' (index: ' + match.index + ')');
// }
