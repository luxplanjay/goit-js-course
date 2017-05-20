(function() {
  'use strict';

// функция-конструктор которая создает обьект в котором хранится кол-во очков пользователя, его имя и набор елементов управления связаные с этим пользователем
  function PlayerCard(str) {
    var self = this;

    var name = str,
      points = 0,
      elements = {};

    // внутренняя функция которая увеличивает кол-во очков на величину параметра val
    var updateScore = function(val) {
      points += val;
    };

    //публичный метод который будет записан как поле результирующего обьекта, создает карточку игрока из dom узлов, сохраняет ссылки на эти узлы в приватном поле elements, таким образом елементы карточки связываются с обьектом. Используем нашу функцию createNode как глобальную чтобы сократить обьем кода.
    self.init = function() {
      var playerCard = createNode('div', 'user-card', null, null),
        nameField = createNode('h2', null, null, name);

      elements.pointsContainer = createNode('p', null, null, points.toString());
      elements.input = createNode('input', null, [{
        name: 'type',
        value: 'text'
      }], null);
      elements.btn = createNode('button', null, null, 'Add');

      // повесим обработчик плика на кнопку ADD. При клике:
      // 1) в переменную value записывается текущее значение в поле elements.input
      // 2) вызываем функцию updateScore которая увеличит кол-во очков на это значение
      // 3) перезаписываем поле elements.pointsContainer новым значением из переменной points
      elements.btn.addEventListener('click', function() {
        var value = elements.input.value;
        updateScore(+value);
        elements.pointsContainer.innerHTML = points;
      });

      // собираем всю карточку игрока
      playerCard.append(nameField, elements.pointsContainer, elements.input, elements.btn);

      //вернем карточку, именно DOM узел с которым уже связаны переменные кол-ва очков, имени и ивенты
      return playerCard;
    };
  }

  var app = {
    // $addPlayer метод который по полученому name создает новый екземпляр карточки игрока из конструктора PlayerCard и цепляет результат в DOM
    addPlayer: function(name) {
      var card = new PlayerCard(name);
      document.querySelector('.cards-container').append(card.init());
    },
    // $createControls просто метод который создает контролы для добавления нового игрока
    createControls: function() {
      var controls = createNode('div', 'controls', null, null),
        input = createNode('input', null, [{
          name: 'type',
          value: 'text'
        }, {
          name: 'id',
          value: 'player-name'
        }]),
        btn = createNode('button', null, null, 'add player');

      // ивент клика по кнопке добавить игрока, просто вызываем метод addPlayer с именем которое ввели в input
      btn.addEventListener('click', function() {
        var el = document.querySelector('#player-name');
        this.addPlayer(el.value);
      }.bind(this));

      controls.append(input, btn);

      return controls;
    },
    // $init, метод инициализации приложения, создает контролы и контейнер для карточек игрока
    init: function() {
      var app = createNode('div', 'app-container', null, null),
        cardsContainer = createNode('div', 'cards-container', null, null);

      var ctrls = this.createControls();

      app.append(ctrls, cardsContainer);
      document.querySelector('#root').appendChild(app);
    }
  };

  app.init();
})();
