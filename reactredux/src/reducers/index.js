import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export default combineReducers({
  movieReducer // movieReducer: movieReducer
})

// Nosso State
// {
//   movieReducer: {
//     selectedCategory: {},
//     selectedMovie: {},
//     categories // categories: categories
//   },
//   outroReducer: {
//     outro: ''
//   }

// }