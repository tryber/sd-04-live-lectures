export function selectMovie(category, movie){
  return {
    type: 'SELECT_MOVIE',
    category, // category: category
    movie // movie: movie
  }
}

// payload = dados que o action quer enviar para o store