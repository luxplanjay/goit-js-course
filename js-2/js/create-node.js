/**
 * Created by Zerk on 16-May-17.
 */

(function () {
  'use strict';



  // 1) сделать елемент с типом тега
  // 2) дать класс
  // 3) дать опциональные аттрибуты
  // 4) повесить текстовую ноду
  // вернуть готовый узел

  function createNode(type, cls, attributes, str) {
    var el = document.createElement(type);

    if (cls && (typeof cls === 'string')) {
      el.classList.add(cls);
    }

    if (attributes && (typeof attributes === 'object')) {
      for (var i = 0; i < attributes.length; i++) {
        el.setAttribute(attributes[i].name, attributes[i].value);
      }
    }

    if (str && (typeof str === 'string')) {
      el.appendChild(document.createTextNode(str));
    }

    return el;
  }


  var attrArr = [
    {
      name: 'src',
      value: 'http://lorempixel.com/400/200/sports'
    },
    {
      name: 'alt',
      value: 'cool mango image'
    }
  ];

  console.log(createNode('img', 'my-image', attrArr, null));
  document.getElementById('root').appendChild(createNode('img', 'my-image', attrArr, null));

  console.log(createNode('div', 'some-class', null, 'asdadasasdad'));
  console.log(createNode('p', 'text', null, 'qeqwe'));
  console.log(createNode('form', 'reg-form', [
    {
      name: 'action',
      value: '#'
    },
    {
      name: 'method',
      value: 'post'
    }
  ], null));


})();
