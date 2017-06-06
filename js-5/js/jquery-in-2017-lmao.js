$(function() {
  'use strict';

  var $links = $('.link'),
    $imgs = $('img'),
    imgID,
    currentLink;

    console.log($links);

  $imgs.hide().first().show();
  $links.first().addClass('link-active');

  $links.on('focus', function (event) {
    event.preventDefault();

    currentLink = $(this);

    $links.removeClass('link-active');
    currentLink.addClass('link-active');

    imgID = currentLink.attr('href');
    console.log(imgID);

    $imgs.hide();
    $(imgID).show();
  });
});
