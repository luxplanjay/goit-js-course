// function Foo() {
//   'use strict';
//   var _this = this;
//
//   var a = 5;
//
//   this.el = document.createElement('button');
//   this.el.innerHTML = 'click me';
//
//   this.el.addEventListener('click', function () {
//     // console.log(_this);
//     console.log(this);
//   }.bind(this));
//
//   document.body.appendChild(this.el);
// }
//
// var instance = new Foo();
