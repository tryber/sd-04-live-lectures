import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';

const rootReducers = combineReducers(
  {
    registerReducer,
    loginReducer
  }
);

export default rootReducers;
