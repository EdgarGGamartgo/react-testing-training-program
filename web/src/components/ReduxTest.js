import React from 'react'
import { connect } from 'react-redux'
import { fetchMovieRequest, addMovie, fetchMovies } from './../redux'


const ReduxTest = ({ movie, fetchMoviesRequest }) => {

    const keys = Object.keys(movie);
    let values = Object.values(movie);
    values[11] = values[11].length === 0 ? false  : 'movies are fetched'

    const sortHandler = (name) => {
          fetchMoviesRequest()
      }

    return (
        <>
            {
                keys.map((key, i) => <p data-testid={key} key={i} >{key}</p>)
            }
                        {
                values.map((value, i) => <p data-testid={`value${i}`} key={i} >{value ? value : 'no defined'}</p>)
            }
            <button data-testid={"button-fetches"} onClick={sortHandler}>button-fetches</button>
        </>
    )
}


const mapStateToProps = state => {
    return {
        movie: state.movie
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchMovie: (show) => dispatch(fetchMovieRequest(show)),
       createMovie: (movieData) => dispatch(addMovie(movieData)),
       fetchMoviesRequest: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
