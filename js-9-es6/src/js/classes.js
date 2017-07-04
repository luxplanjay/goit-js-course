// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getName() {
//     return this.name;
//   }
//
//   getAge() {
//     return this.age;
//   }
// }
//
// // const animal = new Animal('Ajax', 5, 'quack');
// // console.log(animal);
// // Animal.prototype.makeSound.bind({
// //   sound: 'qweqweqweqweqweqweqwe'
// // })();
// // console.log('LOL: ', Animal.prototype.isPrototypeOf(animal));
// // animal.makeSound();
//
// // console.log(Animal.prototype);
//
// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age);
//
//     this.breed = breed;
//   }
//
//   getFullInfo() {
//     console.log(`${super.getName()}, ${super.getAge()}, ${this.breed}`);
//   }
// }
//
// const dog = new Dog('Mango', 2, 'husky');
//
// // console.log(dog);
// // console.log(Dog.prototype);
// // console.log(dog.getName());
