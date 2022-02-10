import React from 'react';
import Proptypes from 'prop-types';
// implement SearchBar component here
const SearchBar = ({
  searchText, onSearchTextChange,
  bookmarkedOnly, onBookmarkedChange,
  selectedGenre, onSelectedGenreChange }) => (
  // eslint-disable-next-line react/jsx-indent
  <form data-testid="search-bar-form" className="search-bar">
    <label data-testid="text-input-label" htmlFor="searchText">
      Inclui o texto:
      <input
        type="text"
        data-testid="text-input"
        value={ searchText }
        onChange={ (e) => onSearchTextChange(e.target.value) }
        id="searchText"
      />
    </label>
    <label htmlFor="checkBox" data-testid="checkbox-input-label">
      Mostrar somente favoritos
      <input
        type="checkbox"
        id="checkBox"
        data-testid="checkbox-input"
        checked={ bookmarkedOnly }
        onChange={ (e) => onBookmarkedChange(e.target.checked) }
      />
    </label>
    <label htmlFor="genderSelect" data-testid="select-input-label">
      Filtrar por gênero
      <select
        id="genderSelect"
        data-testid="select-input"
        value={ selectedGenre }
        onChange={ (e) => onSelectedGenreChange(e.target.value) }
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
  </form>
);

SearchBar.propTypes = {
  searchText: Proptypes.string,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
