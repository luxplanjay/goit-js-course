/// Prototype inheritance = LOL NO !!!
// Prototype Delegation = FUCK YES !!!

// var animal = {
//   makeSound: function() {
//     console.log(this.sound);
//   },
//   sound: 'grrrr'
// };
//
//
// var dog = {
//   sound: 'woof'
// };
//
// console.log('dog before setPrototypeOf: ', dog);
// dog.makeSound();

// используй этот обьект A для другого обьекта B как запасной вариант.
// если обьекте B попросили какое-то поле, а такого поля нету, сходи
// в обьект A и посмотри в нем,
// потому что мы его установили как прототип для обьекта B

// Object.setPrototypeOf(dog, animal);
// console.log('dog after setPrototypeOf: ', dog);
// dog.makeSound();

// var wildDog = {
// 	makeSound: function() {
// 		console.log("I'm a wild dog and I say " + this.sound);
// 	}
// };
//
// Object.setPrototypeOf(wildDog, dog);
// wildDog.makeSound();

// console.log('animal:' , animal);
// console.log('dog : ', dog);
// console.log('wildDog proto: ', wildDog);

// function Animal (sound) {
// this = {}
// this.__proto__ = Animal.prototype
// this.sound = sound;
// return this
// }

// Animal.prototype.makeSound = function () {
//   console.log(this.sound);
// };

//
// Animal {
//   prototype: {
//     constructor: Animal,
//     makeSound: func
//   }
// }
//
// var dog = new Animal('woof');
//
// dog.__proto__ = Animal.prototype

// console.log('dog from new Animal: ', dog);

// __proto__ - прототип обьекта! Это поле в обьекте, в которое записывается
// ссылка на поле(обьект) prototype функции-родителя!!!
// __proto__ - используется в цепочке прототипов для поиска отсутствующих полей
// __proto__ - есть у ВСЕХ обьектов в JS!!!
// __proto__ - должно быть приватным полем, но на самом деле доступен для изменения

// var test = { id: 0 };
//
// console.log(Object.prototype);
// console.log('test: ', test);

// Object это функция-конструктор!!!
// Object.prototype.qwerty = 'qwerty';
// console.log(Object.prototype);
// console.log('test.qwerty: ', test.qwerty);

// prototype это ПОЛЕ(функции-конструктора) в котором хранится
// обьект на который будет ссылается __proto__ того обьекта который
// создастся после вызова функции-конструктора через new
// prototype - существует только в функциях, во ВСЕХ функциях,
// на тот случай если кто-то решит вызвать функцию как конструктор через new.

// console.log('Animal.prototype: ', Animal.prototype);
// console.log('dog.__proto__', dog.__proto__);


// *
// * the 'new' keyword
// *
// 1. Создает пустой обьект
// 2. Проверяет есть ли у того на чем мы вызвали new(функции-конструктора)
// поле prototype(объект) и если да то записывает в прототип(__proto__) нового обьекта
// ссылку на это поле
// 3. Передает обьект(уже со ссылкой на prototype родителя) в функцию-конструктор
// которая запишет через this в новый обьект который ей передали
// 4. Вернет новый обьект

// function newF (constructor) {
//   var obj = {};
//
//   Object.setPrototypeOf(obj, constructor.prototype);
//
//   // псевдомассив aguments вкотором хранятся все аргументы переданые в функцию
//   // не настоящий массив, не имеет доступа к методам массивов!!!
//   // имеет только length  и индексы
//   // console.log(arguments);
//
//   // var args = Array.prototype.slice.apply(arguments);
//   var args = Array.from(arguments);
//   console.log(args);
//
//   // устанавливает this = obj
//   constructor.apply(obj, args.slice(1));
//
//   return obj;
// }
//
// function Animal (sound) {
//   // this = obj
//   this.sound = sound;
// }
//
// Animal.prototype.makeSound = function () {
//   console.log(this.sound);
// };
//
// var dog = newF(Animal, 'woof');
// //
// console.log('dog created with newF: ', dog);

//
// function Robot(name) {
//   this.name = name;
// }
//
//
//
// Robot.prototype.kill = function () {
//   console.log('I am ' + this.name + ' and u are ducked!');
// };
//
// console.log(Robot.prototype);
//
// var killerBot = new Robot('vasya');
//
//
// console.log(killerBot);
