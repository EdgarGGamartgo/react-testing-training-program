import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchMovieRequest, addMovie, fetchMovies } from './../redux'

const noMoviesFound = {
    color: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    marginTop: '20vh'
}

const MoviesCounter = ({ className, movies }) => {
    return (
        <>
        {
            movies.length !== 0 
            ? <div className={className}>
                {movies.length} movies found
              </div> 
            : <div style={noMoviesFound}>
                NO MOVIES FOUND
              </div>
        }
        </>
    )
}

MoviesCounter.propTypes = {
    className: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchMovie: (show) => dispatch(fetchMovieRequest(show)),
       createMovie: (movieData) => dispatch(addMovie(movieData)),
       fetchMoviesRequest: (filters) => dispatch(fetchMovies(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCounter)
