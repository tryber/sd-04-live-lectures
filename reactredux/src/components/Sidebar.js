import React from 'react';
import { connect } from 'react-redux';
import * as MovieActions from '../actions/movieAction';

// componentes funcionais
const Sidebar = ({ categories, selectMovie }) => ( // o parametro da funcao são as props
  <aside>
    {
      categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {
              category.movies.map(movie => (
                <li key={movie.id}>{movie.title} was released in {movie.released}
                  <button type="button" onClick={() => selectMovie(category, movie)}>
                    Select
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </aside>
)

// mapStateToProps -> Faz o papel do subscribe no redux RAIZAO
// e no React faz o papel do render()

const mapStateToProps = (state) => ({ // é executada toda vez que a store é alterada
  categories: state.movieReducer.categories
}) // O objeto retorna é uma props acessivel no componente sideBar

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

// currying
// function a(a){
//   return function b(b){
//     return function c(c){
//       return a + b + c
//     }
//   }
// }

// a(1)(2)(3) = 6
