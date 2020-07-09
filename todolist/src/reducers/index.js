import { combineReducers } from 'redux';
import reducerTodos from './todos';

const rootReducer = combineReducers({reducerTodos});

export default rootReducer;