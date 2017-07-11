import notify from './js/notification.js';
import './css/main.scss';

import menuTemplate from './templates/menu.html';
import _ from 'lodash';

import cat from './img/cat.jpg';

const image = document.getElementById('cat');
image.setAttribute('src', cat);

console.log(menuTemplate);
// notify('mango');

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const dog = new Dog('Mango');
//
// console.log('qweqweqwe');


const menuData = {
  title: 'Menu title',
  items: ['Webpack', 'Wiz', 'ESNext', 'Fiber']
};


const compiled = _.template(menuTemplate);



document.getElementById('root').innerHTML =compiled(menuData);
