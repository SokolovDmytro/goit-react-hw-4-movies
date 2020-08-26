import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import MovieListTemp from './MovieListTemp';
import './Movielist.css';

const Movieslist = ({ movies, location }) => (
  <ul className="movie">
    {movies.map(movie => (
      <li key={movie.id} className="movie__list">
        <div>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              // custom state
              state: { from: location },
            }}
            className="movie__link"
          >
            <MovieListTemp
              title={movie.original_title ? movie.original_title : movie.name}
              poster={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
            />
          </Link>
        </div>
      </li>
    ))}
  </ul>
);

Movieslist.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(Movieslist);