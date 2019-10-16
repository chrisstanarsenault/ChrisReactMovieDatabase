import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link to={`${movie.id}`}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Link>
);

export default Movie;

// eslint-disable-next-line react/no-typos
Movie.PropTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
