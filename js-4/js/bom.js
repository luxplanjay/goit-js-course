// BOM - обьектная модель браузера

(function() {
  'use strict';

  // navigator - иногда может потребоваться
  //проверка операционки и агента браузера
  // console.log('userAgent: ', navigator.userAgent);
  // console.log('platform: ', navigator.platform);

  // $geolocation геолокация, новая фича html5, позволяет получить lat\lon.
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     console.log('Geolocation is not supported by this browser.');
  //   }
  // }
  //
  // function showPosition(position) {
  //   console.log('Latitude: ' + position.coords.latitude);
  //   console.log('Longitude: ' + position.coords.longitude);
  // }
  //
  // getLocation();

  //screen - обьект screen, хранит все данные о екране, разрешение, цветность итд
  // console.log('screen: ', screen);
  // console.log('current screen res: ', screen.width + ' x ' + screen.height);

  //location - содержит инфу о текущемс урле, протоколе итд
  // console.log(location);
  // console.log('location url as a string: ', location.toString());

  // history - позволяет без перезагрузки переходить назад и вперед по исптории страниц, и менять страницы без перезагрузки. Технология Pjax
  // console.log(history);
})();
