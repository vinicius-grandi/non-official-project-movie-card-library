import propTypes from 'prop-types';
import React from 'react';
import AddMovieInputs from './AddMovieInputs';
// implement AddMovie component here
const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
const AddMovie = ({ onClick }) => {
  const [movie, setMovie] = React.useState(initialState);
  const movieChangeHandler = (e) => setMovie({ ...movie, [e.target.id]: e.target.value });
  const { title, subtitle, imagePath, storyline, rating, genre } = movie;
  const titulo = ['text', 'title', title, 'Título', 'title'];
  const subtitulo = ['text', 'subtitle', subtitle, 'Subtítulo', 'subtitle'];
  const imagem = ['text', 'imagePath', imagePath, 'Imagem', 'image'];
  const nota = ['number', 'rating', rating, 'Avaliação', 'rating'];
  return (
    <form data-testid="add-movie-form" className="add-movie">
      <AddMovieInputs info={ titulo } fn={ movieChangeHandler } />
      <AddMovieInputs info={ subtitulo } fn={ movieChangeHandler } />
      <AddMovieInputs info={ imagem } fn={ movieChangeHandler } />
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          cols="30"
          rows="5"
          value={ storyline }
          onChange={ (e) => movieChangeHandler(e) }
          data-testid="storyline-input"
        />
      </label>
      <AddMovieInputs info={ nota } fn={ movieChangeHandler } />
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ (e) => movieChangeHandler(e) }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          onClick(movie); setMovie(initialState);
        } }
      >
        Adicionar filme
      </button>
    </form>
  );
};

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;
