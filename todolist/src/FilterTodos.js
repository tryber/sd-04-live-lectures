import React from 'react';
import { connect } from 'react-redux'
import { filterTodo } from './actions/todos';


const FilterTodos = ({filterTodo}) => (
  <div>
    <button onClick={() => filterTodo('done')}>
      Mostrar feitos
    </button>
    <button onClick={() => filterTodo('notdone')}>
      Mostrar nao feitos
    </button>
    <button onClick={() => filterTodo('all')}>
      Mostrar todos
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filterTodo: (text) => dispatch(filterTodo(text))
})

export default connect(null, mapDispatchToProps)(FilterTodos)