export const ADD_TODO = 'ADD_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const SELECT_TODO = 'SELECT_TODO'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo // todo: todo
})

export const filterTodo = (filterType) => ({
  type: FILTER_TODO,
  filterType,
})

export const selectTodo = (id) => ({
  type: SELECT_TODO,
  id
})

// i have an ideia
// Tarefa possible status
// - todo - Check
// - done - Check

// Filter 
// - todo
// - done

