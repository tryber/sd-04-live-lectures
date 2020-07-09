import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/todos';

const AddTodo = ({ addTodo }) => {
  let input;

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(input.value)
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input ref={(node) => { input = node }} type="text" />
        <button type="submit">
          Adiciona meu Todo ai
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => (
  {
    addTodo: (todo) => dispatch(addTodo(todo)),

  }
)

export default connect(null, mapDispatchToProps)(AddTodo);