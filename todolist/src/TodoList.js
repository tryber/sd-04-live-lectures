import React from 'react';
import { connect } from 'react-redux';
import { selectTodo } from './actions/todos';


const filterTodos = (todos, filterType) => {
  console.log(todos)
  console.log(filterType)
  if (filterType === 'all') {
    return todos
  }

  if (filterType === 'done') {
    return todos.filter((todo) => todo.done)
  }

  if (filterType === 'notdone') {
    return todos.filter((todo) => !todo.done)
  }
}


const TodoList = ({ todos, filterType, selectTodo }) => (
  <div>
    <ul>
      {
        filterTodos(todos, filterType).map((todo, index) => (
          <li
            key={index}
            onClick={() => selectTodo(todo.id)}
            style={todo.done ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>
            {todo.text}
          </li>
        ))
      }
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.reducerTodos.todos,
  filterType: state.reducerTodos.filterType
})

const mapDispatchToProps = (dispatch) => ({
  selectTodo: (id) => dispatch(selectTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)