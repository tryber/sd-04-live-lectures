import {
  ADD_TODO,
  FILTER_TODO,
  SELECT_TODO
} from '../actions/todos';

const INITIAL_STATE = {
  todos: [],
  initialId: 1,
  filterType: 'all'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        initialId: state.initialId + 1,
        todos: [
          ...state.todos,
          {
            id: state.initialId,
            text: action.todo,
            done: false
          }
        ]
      }
    case SELECT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              id: todo.id,
              text: todo.text,
              done: !todo.done
            }
          }
          return todo
        })
      }
    case FILTER_TODO:
      return {
        ...state,
        filterType: action.filterType
      }
    default:
      return state;
  }
}

export default reducer;