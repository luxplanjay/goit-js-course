//--- $eventListener

// (function () {
//   'use strict';
//
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('нажми меня'));
//
//   btn.addEventListener('click', function() {
//     alert('А вот и алерт при клике!');
//   });
//
//   document.getElementById('root').appendChild(btn);
// })();


//--- $event

// (function () {
//   'use strict';
//
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('нажми меня'));
//
//   btn.addEventListener('click', function(event) {
//     console.log('event: ', event);
//     console.log('event.target: ', event.target);
//   });
//
//   document.getElementById('root').appendChild(btn);
// })();


//--- $event.target

// (function() {
//   'use strict';
//
//   var list = document.createElement('nav');
//
//   for (var i = 0; i < 5; i++) {
//     var link = document.createElement('a');
//     link.setAttribute('href', '#');
//     link.innerHTML = 'item ' + i;
//     link.style.display = 'inline-block';
//     link.style.padding = '20px';
//     link.style.outline = '1px solid #ccc';
//
//     list.appendChild(link);
//   }
//
//   list.addEventListener('click', function(event) {
//     console.log('this: ', this);
//     console.log('event target: ', event.target);
//   });
//
//   document.getElementById('root').appendChild(list);
// })();

//--- $Event delegation

// (function() {
//   'use strict';
//
//   var list = document.createElement('nav');
//
//   for (var i = 0; i < 5; i++) {
//     var link = document.createElement('a');
//     link.setAttribute('href', '#');
//     link.innerHTML = 'item ' + i;
//     link.style.display = 'inline-block';
//     link.style.padding = '20px';
//     link.style.outline = '1px solid #ccc';
//
//     list.appendChild(link);
//   }
//
//   list.addEventListener('click', function(event) {
//     console.log('this: ', this);
//
//     console.log('event target: ', event.target);
//     console.log('event target text: ', event.target.innerHTML);
//
//     event.target.style.backgroundColor = 'aqua';
//     setTimeout(function() {
//       event.target.style.backgroundColor = '';
//     }, 200);
//   });
//
//   document.getElementById('root').appendChild(list);
// })();
