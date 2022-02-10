import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import useFilter from '../hooks/useFilter';
// implement MovieLibrary component here
const MovieLibrary = ({ movies }) => {
  const [searchText, setSearchText] = React.useState('');
  const [cbookmarkedOnly, setCbookmarkedOnly] = React.useState(false);
  const [selectedGenre, setSelectedGenre] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [observer, setObserver] = React.useState(false);
  // Filters
  const textFilter = movies.filter((movie) => {
    const regex = new RegExp(`${searchText}`, 'ig');
    const { title, subtitle, storyline } = movie;
    if (searchText === '') return movie.title.match(/./);
    return title.match(regex)
    || subtitle.match(regex)
    || storyline.match(regex);
  });
  const bookmarkFilter = ({ bookmarked }) => {
    if (cbookmarkedOnly === false) return true;
    return bookmarked === cbookmarkedOnly;
  };
  const genreFilter = ({ genre }) => {
    if (selectedGenre === '') return true;
    return genre === selectedGenre;
  };
  // Custom hook with useLayoutEffect
  const didMountRef = useRef(false);
  useFilter(() => {
    if (didMountRef.current) {
      setFilteredMovies(textFilter.filter(bookmarkFilter).filter(genreFilter));
    }
    didMountRef.current = true;
  }, [searchText, cbookmarkedOnly, selectedGenre, observer]);
  return (
    <>
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ setSearchText }
        bookmarkedOnly={ cbookmarkedOnly }
        onBookmarkedChange={ setCbookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ setSelectedGenre }
      />
      <MovieList movies={ filteredMovies } />
      <AddMovie
        onClick={ (movie) => { movies.push(movie); setObserver(!observer); } }
      />
    </>
  );
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
