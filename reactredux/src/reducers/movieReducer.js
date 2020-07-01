import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories // categories: categories
}

function movieReducer(state = INITIAL_STATE, action) {
  // state: é o estado anterior ou o estado inicial da aplicação;
  // action: a ação realizada (o clique, a digitação, a seleção de uma opção, etc.)
  if (action.type === "SELECT_MOVIE") {

    // const stateAntes = {
    //   selectedCategory: {},
    //   selectedMovie: {},
    //   categories // categories: categories
    // }

    return {
      ...state, // INITIAL_STATE
      selectedCategory: action.category,
      selectedMovie: action.movie
    }

    // const stateDepois = {
    //   selectedCategory: "DRAMA",
    //   selectedMovie: "INTERSTELAR",
    //   categories // categories: categories
    // }
  }
  return state;
}


export default movieReducer;