// (function() {
//   'use strict';
//
//   fetch('https://api.myjson.com/bins/r4307')
//     .then(function(response) {
//       console.log(response);
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('ERROR fetching data!');
//     }).then(function(data) {
//       console.log(data);
//     }).catch(function (error) {
//       console.log(error);
//     });
// })();

// (function() {
//   'use strict';
//
//   var container = document.getElementById('root'),
//     source = document.getElementById('article').textContent,
//     compiled = _.template(source),
//     apiUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=5b88481e2156441382975efd19981185';
//
//   var promise = fetch(apiUrl).then(function(response) {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('ERROR while fetching!');
//   }).then(function(data) {
//     console.log(data);
//     var articles = _.map(data.articles, function(item) {
//       return {
//         title: item.title,
//         text: item.description,
//         img: item.urlToImage,
//         url: item.url
//       };
//     });
//
//     console.log(articles);
//
//     render(compiled, articles, container);
//   }).catch(function(error) {
//     console.log(error);
//   });
//
//   function render(template, data, parent) {
//     var htmlString = '';
//
//     _.forEach(data, function(item) {
//       htmlString += template(item);
//     });
//
//     parent.innerHTML += htmlString;
//   }
// })();

// https://www.mediawiki.org/wiki/Extension:TextExtracts
// https://www.mediawiki.org/wiki/API:Page_info_in_search_results
// (function() {
//   'use strict';
//
//   var container = document.getElementById('root'),
//     source = document.getElementById('article').textContent,
//     compiled = _.template(source);
//
//   var endpoint = 'https://en.wikipedia.org/w/api.php?',
//     origin = 'origin=*',
//     format = '&format=json&formatversion=2',
//     action = '&action=query&generator=search',
//     props = '&prop=extracts|pageimages&exchars=500&exintro&explaintext&piprop=thumbnail&pithumbsize=600',
//     search = '&gsrsearch=car',
//     apiUrl = endpoint + origin + format + action + props + search;
//
//   getData(apiUrl).then(function(data) {
//     render(compiled, data, container);
//   });
//
//   function getData(url) {
//     return fetch(url)
//       .then(function(response) {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Error during fetch');
//       })
//       .then(function(data) {
//         var arr = _.map(data.query.pages, function(item) {
//           var img = item.thumbnail ? item.thumbnail.source : 'http://via.placeholder.com/640x480?text=image not found';
//
//           return {
//             title: item.title,
//             text: item.extract,
//             img: img,
//             url: 'https://en.wikipedia.org/?curid=' + item.pageid
//           };
//         });
//
//         return arr;
//       });
//   }
//
//   function render(template, data, parent) {
//     var string = '';
//
//     _.forEach(data, function(item) {
//       string += template(item);
//     });
//
//     parent.innerHTML += string;
//   }
// })();
