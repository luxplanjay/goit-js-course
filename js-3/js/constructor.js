//-- SIMPLE
// (function() {
//   'use strict';
//
//   var Human = function(name, age, gender) {
//     // this = {}; <-- то, что делает интерпретатор
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // return this; <-- то, что делает интерпретатор
//   };
//
//   var person1 = new Human('Singu', '25', 'male');
//   var person2 = new Human('Chelsey', '35', 'female');
//
//   console.log(person1);
//   console.log(person2);
// })();

//-- RETURN
// (function() {
//   'use strict';
//
//   var Human = function(name, age) {
//     this.name = name;
//     this.age = age;
//     return {
//       name: 'Вася',
//       age: 999
//     };
//   };
//   console.log(new Human('Коля', 20));
// })();
//
// (function() {
//   'use strict';
//
//   var Human = function(name, age) {
//     this.name = name;
//     this.age = age;
//     return 'Amazing string!';
//   };
//   console.log(new Human('Коля', 20));
// })();

//-- METHODS
// (function() {
//   'use strict';
//
//   var Human = function(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//
//     this.getName = function() {
//       console.log('This persons name is ' + this.name);
//     };
//   };
//
//   var person = new Human('Singu', 20);
//   person.getName(); // This persons name is Singu
//
//   // console.log(person);
// })();

//-- LOCAL methods and vars
// (function() {
//   'use strict';
//
//   var Human = function(name, age, gender) {
//     var message = 'This persons info is: ';
//
//     var addString = function() {
//       return message + ' ' + name + ' ' + age + ' ' + gender;
//     };
//
//     this.getFullInfo = function() {
//       console.log(addString());
//     };
//   };
//
//   var person = new Human('Singu', 20, 'male');
//   person.getFullInfo(); // This persons info is:  Singu 20 male
// })();

//-- GAME CARDS
// (function() {
//   'use strict';
//
//   // функция-конструктор создает обьект в котором хранится кол-во
//   // очков пользователя, его имя и набор елементов управления связаные с
//   // этим пользователем
//   // Пока что мы не знаем что такое прототип, поэтому пишем методы и функции
//   // прямо в конструкторе
//   var PlayerCard = function(name) {
//     var points = 0,
//       elements = {};
//
//     // Внутренняя функция которая увеличивает кол-во очков на величину
//     // параметра val
//     var updateScore = function(val) {
//       points += val;
//     };
//
//     // Публичный метод который будет записан как поле результирующего обьекта,
//     // создает карточку игрока из dom узлов, сохраняет ссылки на эти узлы в
//     // поле elements, таким образом елементы карточки связываются с
//     // обьектом. Используем нашу функцию createNode как глобальную чтобы
//     // сократить обьем кода.
//     this.init = function() {
//       var playerCard = createNode('div', 'user-card', null, null),
//         nameField = createNode('h2', null, null, name);
//
//       elements.pointsContainer = createNode('p', null, null, points.toString());
//       elements.input = createNode('input', null, {type: 'text'}, null);
//       elements.btn = createNode('button', null, null, 'Add');
//
//       // Повесим обработчик плика на кнопку ADD. При клике:
//       // 1) в переменную value записывается текущее значение в поле
//       // elements.input
//       // 2) вызываем функцию updateScore которая увеличит кол-во очков на это
//       // значение
//       // 3) перезаписываем поле elements.pointsContainer новым значением из
//       // переменной points
//       elements.btn.addEventListener('click', function() {
//         var value = elements.input.value;
//         updateScore(+value);
//         elements.pointsContainer.innerHTML = points;
//       });
//
//       // Собираем всю карточку игрока
//       playerCard.append(nameField, elements.pointsContainer, elements.input, elements.btn);
//
//       // Вернем карточку, именно DOM узел с которым уже связаны переменные
//       // кол-ва очков, имени и ивенты
//       return playerCard;
//     };
//   };
//
//   var APP = {
//     // $addPlayer - метод который по полученому name создает новый екземпляр
//     // карточки игрока из конструктора PlayerCard и цепляет результат
//     // в DOM
//     addPlayer: function(name) {
//       var card = new PlayerCard(name);
//       document.querySelector('.cards-container').append(card.init());
//     },
//
//     // $createControls - просто метод который создает контролы для
//     // добавления нового игрока
//     createControls: function() {
//       var controls = createNode('div', 'controls', null, null),
//         input = createNode('input', null, {type: 'text', id: 'player-name'}, null),
//         btn = createNode('button', null, null, 'add player');
//
//       // Ивент клика по кнопке добавить игрока, просто вызываем метод
//       // addPlayer с именем которое ввели в input
//       btn.addEventListener('click', function() {
//         var el = document.querySelector('#player-name');
//         this.addPlayer(el.value);
//       }.bind(this));
//
//       controls.append(input, btn);
//
//       return controls;
//     },
//     // $init - метод инициализации приложения, создает контролы и контейнер
//     // для карточек игрока
//     init: function() {
//       var app = createNode('div', 'app-container', null, null),
//         cardsContainer = createNode('div', 'cards-container', null, null);
//
//       var ctrls = this.createControls();
//
//       app.append(ctrls, cardsContainer);
//       document.querySelector('#root').appendChild(app);
//     }
//   };
//
//   APP.init();
// })();
