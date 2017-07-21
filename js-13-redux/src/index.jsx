import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import 'vanilla';

import App from '@/containers/App';
import store from '@/store';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// const onAdd = () => {
//   store.dispatch({
//     type: 'ADD',
//     payload: 10
//   });
// };
//
// const onSub = () => {
//   store.dispatch({
//     type: 'SUB',
//     payload: 10
//   });
// };
//
// const Counter = ({value, onAdd, onSub}) => (
//   <div className="container card-panel center-align">
//     <h1>{value}</h1>
//     <button className="btn" onClick={onAdd}>+</button>
//     <button className="btn" onClick={onSub}>-</button>
//   </div>
// );
//
//
// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onAdd={onAdd}
//       onSub={onSub}
//     />,
//     document.getElementById('root')
//   );
// };
//
// store.subscribe(render);
// render();
