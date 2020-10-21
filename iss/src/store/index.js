import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// Codigo do Thunk

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }

//     return next(action);
//   };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// export default thunk;