import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/original'

class MovieDetails extends Component {

  state = {
    movie: {},
  }



  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a1d1f9d8d405b856379b76511512345c&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>

        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background-size: cover;
  background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 0 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -3rem;
  }
`;
