import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card movie-card">
            <div className="card-image">
              <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{storyline}</p>
            </div>
            <div className="card-action">
              <Link data-testid={`${title}Details`} to={`/movies/${id}`}>Ver detalhes</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
