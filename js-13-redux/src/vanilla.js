// import { createStore } from 'redux';
// 1. Все состояние приложения представлено как объект
//
// const state = {
//
// };

// 2. state только для чтения! нельзя добавлять или записывать в
// state.
// state это минимально возможное представление состояния приложения
// action это обьект. action это минимально возможное представление
// изменения состояния приложения
// единственный способ изменить состояние приложения это диспачнуть action

// const action = {
//   type: 'ADD_USER',
//   payload: {
//     name: 'Mango',
//     age: 2
//   }
// };


// 3. Изменение состояния в приложении должно быть описано как чистая функция.
// Которая принимает предыдущее состоянии и action, и возвращает следующее состояние
// это reducer

function counterReducer(state = 0, action) {
  switch(action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUB':
      return state - action.payload;
    default:
      return state;
  }
}

// console.log( counterReducer(0, {
//   type: 'ADD',
//   payload: 10
// }) );
//
// console.log( counterReducer(50, {
//   type: 'ADD',
//   payload: 40
// }) );
//
// console.log( counterReducer(100, {
//   type: 'SUB',
//   payload: 20
// }) );
//
// console.log( counterReducer(undefined, {
//   type: 'ADD',
//   payload: 20
// }) );


// 4. Компоненты не знают как происходит изменения в состоянии приложения
// все что им нужно знать это - при интеракции с пользователем им надо диспачнуть action
// после чего состояние приложения меняется и меняется ui в зависимости от состояния

// 5. store связывает 3 принципа redux.
// он содержит в себе текущий обьект состояния приложения.
// он позвонялет диспатчить екщены.
// во время создания нам необходимо указать редюсер чтобы store знал как изменять state
// в зависимости от типов action

// const store = createStore(counterReducer);

// console.log(store);
// 6. Методы store.

// getState - возвращает текущее состояние приложения
// console.log(store.getState());

// dispatch - выстреливает action

// store.dispatch({
//   type: 'ADD',
//   payload: 100
// });
//
// store.dispatch({
//   type: 'SUB',
//   payload: 500
// });

// subscribe -  позволяет прицепить callback функцию которую store будет вызывать каждый раз когда происходит диспатч екшена

// const output = document.getElementById('output');
// const addBtn = document.getElementById('add');
// const subBtn = document.getElementById('sub');
//
// const logger = () => {
//   output.textContent = store.getState();
// };
//
//
//
//
// addBtn.addEventListener('click', () => {
//   store.dispatch({
//     type: 'ADD',
//     payload: 10
//   });
// });
//
// subBtn.addEventListener('click', () => {
//   store.dispatch({
//     type: 'SUB',
//     payload: 10
//   });
// });
//
// store.subscribe(logger);
// logger();

// store.dispatch({
//   type: 'ADD',
//   payload: 100
// });
//
// store.dispatch({
//   type: 'SUB',
//   payload: 300
// });

