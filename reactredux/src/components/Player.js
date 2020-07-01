import React from 'react'
import { connect } from 'react-redux';

const Player = ({ category, movie }) => (
  <div>
    <h1>Categoria: {category.name}</h1>
    <h2>Filme: {movie.title}</h2>
  </div>
)

const mapStateToProps = state => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie
})

export default connect(mapStateToProps)(Player);


// class Player extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movieReducer: {
//         selectedCategory: {},
//         selectedMovie: {},
//         categories // categories: categories
//       }
//     }
//   }
//   render() {
//     const { selectedCategory, selectedMovie } = this.state.movieReducer;
//     return (
//       <div>
//         <h1>Categoria: {category.name}</h1>
//         <h2>Filme: {movie.title}</h2>
//       </div>
//     );
//   }
// }

// export default Player;