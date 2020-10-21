import { createStore, combineReducers } from 'redux';

import reducer from '../reducers';
// import reducerUser from '..';

const rootReducer = combineReducers({ reducer })

const store = createStore(rootReducer);


// this.state
// {
//   state: {
//     reducer: {
//       cart: [],
//       totalPrice: 0
//     },
//     reducerUser:{
//       userName: 'xablau',
//       age: 10
//     }
//   }
// }

export default store;