// (function() {
//   'use strict';
//
//   // Представьте, у вас есть небольшой магазин. В магазине есть два менеджера, занимающихся продажей ваших товаров. И вы решаете организовать их работу. Для каждого менеджера создаётся отдельный объект
//
//   var mango = {
//     name: 'Mango',
//     sales: 5,
//     sell: function(item) {
//       this.sales += 1;
//       return 'Manager ' + this.name + ' sold ' + item;
//     }
//   };
//
//   console.log( mango );
//   console.log( mango.sell('phone') );
//   console.log('sales: ', mango.sales );
//
//   var singu = {
//     name: 'Singu',
//     sales: 10,
//     sell: function(item) {
//       this.sales += 1;
//       return 'Manager ' + this.name + ' sold ' + item;
//     }
//   };
//
//   console.log(singu);
//   console.log(singu.sell('tv'));
//   console.log('sales: ', singu.sales);
//
//   console.log(mango.sell === singu.sell);
//
//   // это означает что каждый обьект содержит свою копию функции. Под каждую функцию выделяется место в памяти. Представим что будет когда магазин выростет до пары сотен менеджеров, для каждого придется создать обьект и метод обьекта. А если методов будет много?
// })();

// (function() {
//   'use strict';
//   //Вспоминаем про функции-конструкторы
//
//   var Manager = function(name, sales) {
//     this.name = name;
//     this.sales = sales;
//     this.sell = function(item) {
//       this.sales += 1;
//       return 'Manager ' + this.name + ' sold ' + item;
//     };
//   };
//
//   var johny = new Manager('John', 50);
//   var kate = new Manager('Kate', 100);
//
//   console.log(johny);
//   console.log(kate);
//
//   // Создавая объект с помощью функции-конструктора, вы автоматически присваиваете объекту свойство: constructor, которое содержит ссылку на функцию-конструктор, с помощью которой был создан объект.  C помощью свойства constructor можно получить, как саму функцию-конструктор, так и её имя.
//
//   // console.log(johny.constructor);
//   // console.log(johny.constructor.name);
//   // console.log(johny instanceof Manager);
// })();

// (function() {
//   'use strict';
//   //Итак, мы выяснили, что с помощью функций-конструкторов и оператора new можно создать объект. Но нашу проблему всё равно не решили. Для каждого нового объекта будет создаваться новая функция, которая будет записываться в метод sell. И здесь нам поможет прототип функции Manager.
//
//   var Manager = function(name, sales) {
//     this.name = name;
//     this.sales = sales;
//   };
//
//   Manager.prototype.sell = function(item) {
//     this.sales += 1;
//     return 'Manager ' + this.name + ' sold ' + item;
//   };
//
//   var mango = new Manager('Mango', 120);
//
//   console.log(mango);
//   console.log(mango.sell('tv'));
//   console.log(mango.sales);
//
//   //Что вообще происходит? Каждый объект в JavaScript обладает прототипом. Чтобы в этом убедиться, откройте консоль и введите console.dir([]);. Открыв свойство __proto__ вы сможете увидеть все методы для работы с массивами, которые предусмотрены в вашем браузере. Очевидно, что каждый массив по-отдельности не снабжается всеми данными методами. Но, тем не менее, мы без проблем можем их использовать.
//
//   //Когда вы используете какой-либо метод массивов, например, map или forEach, то вы подразумеваете, что этот метод будет взят из прототипа функции-конструктора Array. Любой массив может использовать все методы, записанные в прототип конструктора Array, хотя у самого массива нет ни одного метода. Таким образом, любой объект получает возможность использовать все методы, записанные в прототипе его функции-конструктора.
// })();

// (function() {
//   'use strict';
//
//   //Само свойство prototype является не более чем обычным объектом, поэтому, если вы хотите сразу же записать несколько методов в прототип, то пример выше можно переписать следующим образом.
//
//   var Manager = function(name, sales) {
//     this.name = name;
//     this.sales = sales;
//   };
//
//   Manager.prototype = {
//     getName: function() {
//       return this.name;
//     },
//     getSales: function() {
//       return this.sales;
//     },
//     sell: function(item) {
//       this.sales += 1;
//       return 'Manager ' + this.name + ' sold ' + item;
//     }
//   };
//
//   var mango = new Manager('Mango', 120);
//
//   console.log(mango);
//   console.log(mango.sell('tv'));
//   console.log(mango.sales);
//   console.log(mango.getName());
// })();
