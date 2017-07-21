import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createLogger(), thunk))
);
