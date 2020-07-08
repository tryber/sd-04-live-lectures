const initialState = {};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN - loginReducer state:', action.value)
      return action.value;
    default:
      return state;
  }
}

export default loginReducer;
