import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  counter: counterReducer,
  users: userReducer,
  userFilter: filterReducer
});
