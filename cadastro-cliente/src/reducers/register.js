const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REGISTER':

      // console.log('ADD-REGISTER - registerReducer state:', [...state, action.data])
      return [...state, action.data];

    case 'DELETE_REGISTER':
      
      // console.log('DELETE-REGISTER - registerReducer state:', state.filter((register) => register !== action.value))
      return state.filter((register) => register !== action.value);

    default:
      return state;
  }
}

export default registerReducer;
