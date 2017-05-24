function createNode(type, cls, attributes, str) {
  'use strict';

  var el = document.createElement(type);

  if (cls && (typeof cls === 'string')) {
    el.classList.add(cls);
  }

  if (attributes && (typeof attributes === 'object')) {
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
          el.setAttribute(key, attributes[key]);
      }
    }
  }

  if (str && (typeof str === 'string')) {
    el.appendChild(document.createTextNode(str));
  }

  return el;
}
