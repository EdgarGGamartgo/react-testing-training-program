import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState } from './../Movie/movieReducer'
import rootReducer from './../rootReducer'
import ReduxTest from './../../components/ReduxTest'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {
  fetchMovies,
  fetchMoviesSuccess,
  addMovie,
  createMovieSuccess,
  editMovie,
  editMovieSuccess,
  deleteMovie,
  deleteMovieSuccess,
  editMovieError,
  deleteMovieError,
} from './../../redux/Movie/movieActions'

const buildStore = configureStore([thunk]);

describe("REDUX", () => {

  let storeR;

  beforeEach(() => {
    storeR = buildStore(initialState);
  });

  const renderWithRedux = (
    component,
    { store = createStore(rootReducer, {
      movie: initialState
    }) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

  afterEach(cleanup);



  it('checks initial state for movieReducer', () => {
    const { getByTestId } = renderWithRedux(<ReduxTest />, {
      movie: initialState
    })

    expect(getByTestId('id')).toHaveTextContent('id')
    expect(getByTestId('title')).toHaveTextContent('title')
    expect(getByTestId('genre')).toHaveTextContent('genre')
    expect(getByTestId('releaseDate')).toHaveTextContent('releaseDate')
    expect(getByTestId('img')).toHaveTextContent('img')
    expect(getByTestId('imgAlt')).toHaveTextContent('imgAlt')
    expect(getByTestId('url')).toHaveTextContent('url')
    expect(getByTestId('overview')).toHaveTextContent('overview')
    expect(getByTestId('runtime')).toHaveTextContent('runtime')
    expect(getByTestId('show')).toHaveTextContent('show')
    expect(getByTestId('loading')).toHaveTextContent('loading')
    expect(getByTestId('movies')).toHaveTextContent('movies')
    expect(getByTestId('error')).toHaveTextContent('error')
    expect(getByTestId('movie')).toHaveTextContent('movie')

    expect(getByTestId('value0')).toHaveTextContent('1')
    expect(getByTestId('value1')).toHaveTextContent('Pulp Fiction')
    expect(getByTestId('value2')).toHaveTextContent('Action & Adventure')
    expect(getByTestId('value3')).toHaveTextContent('2000-05-03')
    expect(getByTestId('value4')).toHaveTextContent('https://unsplash.it/800/600?image=11')
    expect(getByTestId('value5')).toHaveTextContent('Movie Img')
    expect(getByTestId('value6')).toHaveTextContent('www.someurl.com')
    expect(getByTestId('value7')).toHaveTextContent('Pulp fiction is a 1994 Americam crime film...')
    expect(getByTestId('value8')).toHaveTextContent('154 min')
    expect(getByTestId('value9')).toHaveTextContent('no defined')
    expect(getByTestId('value10')).toHaveTextContent('no defined')
    expect(getByTestId('value11')).toHaveTextContent('no defined')
    expect(getByTestId('value12')).toHaveTextContent('no defined')
    expect(getByTestId('value13')).toHaveTextContent('no defined')


  })

  it('fetchMovies through redux', () => {
    return storeR.dispatch(fetchMovies()).then(() => {
      const actions = storeR.getActions()
      expect(actions[0]).toEqual(fetchMoviesSuccess(actions[0].payload))
    })
  })

  it('addMovie through redux', () => {
    return storeR.dispatch(addMovie({
      "title": "La La Land",
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": "2016-12-29",
      "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": 128,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ]
    })).then(() => {
      const actions = storeR.getActions()
      expect(actions[1]).toEqual(createMovieSuccess(actions[1].payload))
    })
  })

  it('editMovie through redux', () => {
    return storeR.dispatch(editMovie({
      "title": "La La Land",
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": "2016-12-29",
      "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": 128,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "id": 313369
    })).then(() => {
      const actions = storeR.getActions()
      if (actions[1] === 'EDIT_MOVIE_SUCCESS') {
        expect(actions[1]).toEqual(editMovieSuccess(actions[1].payload))
      } else {
        expect(actions[1]).toEqual(editMovieError(actions[1].payload))
      }
    })
  })

  it('deleteMovie through redux', () => {
    return storeR.dispatch(deleteMovie(313369)).then(() => {
      const actions = storeR.getActions()
      if (actions[1] === 'DELETE_MOVIE_SUCCESS') {
        expect(actions[1]).toEqual(deleteMovieSuccess(actions[1].payload))
      } else {
        expect(actions[1]).toEqual(deleteMovieError(actions[1].payload))
      }
    })
  })

})