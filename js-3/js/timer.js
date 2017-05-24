// (function () {
//   'use strict';
//
//   var startTime,
//   deltaTime;
//   var startBtn = document.createElement('button');
//   startBtn.innerHTML = 'START';
//
//   startBtn.addEventListener('click', function () {
//     startTime = Date.now();
//     setInterval(function() {
//       deltaTime = Date.now() - startTime;
//       console.log(deltaTime);
//     }, 1000);
//     console.log(startTime);
//   });
//
//   document.querySelector('#root').append(startBtn);
// })();

// (function() {
//   'use strict';
//
//   var Timer = function() {
//     this.elements = {};
//     this.intervalID = null;
//     this.isActive = false;
//     this.deltaTime = 0;
//     this.startTime = 0;
//
//     this.createLayout = function() {
//       var container = createNode('div', null, null, null);
//       container.style.border = '1px solid #ccc';
//
//       var startBtn = createNode('button', null, null, 'START'),
//       stopBtn = createNode('button', null, null, 'STOP');
//       this.elements.timeField = createNode('p', null, null, '0');
//       this.elements.timeField.style.fontSize = '3rem';
//
//       startBtn.addEventListener('click', this.start.bind(this));
//       stopBtn.addEventListener('click', this.stop.bind(this));
//
//       container.append(startBtn, stopBtn, this.elements.timeField);
//
//       return container;
//     };
//
//     this.start = function() {
//       if (!this.isActive) {
//         this.setTime();
//         this.intervalID = setInterval(this.updateTime.bind(this), 1);
//         this.isActive = true;
//       }
//     };
//
//     this.stop = function() {
//       clearInterval(this.intervalID);
//       this.isActive = false;
//     };
//
//     this.updateTime = function() {
//       this.deltaTime = new Date(Date.now() - this.startTime);
//       this.updateHTML();
//     };
//
//     this.updateHTML = function() {
//       this.elements.timeField.innerHTML = this.deltaTime.getSeconds() + ' : ' + this.deltaTime.getMilliseconds();
//     };
//
//     this.setTime = function() {
//       this.startTime = Date.now();
//     };
//
//     this.init = function() {
//       document.querySelector('#root').append(this.createLayout());
//     };
//   };
//
//   var instance1 = new Timer();
//   console.log(instance1);
//   instance1.init();
//
//   var instance2 = new Timer();
//   console.log(instance2);
//   instance2.init();
//
//   var instance3 = new Timer();
//   console.log(instance3);
//   instance3.init();
// })();
