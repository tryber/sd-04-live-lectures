import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={title}
            onChange={(event) => this.updateMovie('title', event.target.value)}
          />
          <label className="active" htmlFor="movie_title">Título</label>
        </div>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            className="validate"
            value={subtitle}
            onChange={(event) => this.updateMovie('subtitle', event.target.value)}
          />
          <label className="active" htmlFor="movie_subtitle">Subtítulo</label>
        </div>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="validate"
            value={imagePath}
            onChange={(event) => this.updateMovie('imagePath', event.target.value)}
          />
          <label className="active" htmlFor="movie_image">Imagem</label>
        </div>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="movie_storyline"
            className="materialize-textarea"
            value={storyline}
            onChange={(event) => this.updateMovie('storyline', event.target.value)}
          />
          <label className="active" htmlFor="movie_storyline">Sinopse</label>
        </div>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="row col">
        <label htmlFor="movie_genre">Genre Select</label>
        <select
          className="browser-default"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            className="form-control"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            onChange={(event) => this.updateMovie('rating', event.target.value)}
          />
          <label className="active" htmlFor="movie_rating">Avaliação</label>
        </div>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <button
          className="btn waves-effect waves-light"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-form">
        <div className="row">
          <form className="col s12">
            {this.renderTitleInput()}
            {this.renderSubtitleInput()}
            {this.renderImagePathInput()}
            {this.renderStorylineInput()}
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  },
};

export default MovieForm;
