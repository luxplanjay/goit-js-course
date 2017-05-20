/**
 * Created by Zerk on 16-May-17.
 */

function createNode(type, cls, attributes, str) {
  'use strict';

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
