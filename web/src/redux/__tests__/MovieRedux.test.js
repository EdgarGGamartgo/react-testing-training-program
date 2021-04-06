import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import movieReducer, { initialState } from './../Movie/movieReducer'
import rootReducer from './../rootReducer'
import MoviesCounter from './../../components/MoviesCounter'


const renderWithRedux = (
  component,
  { initState, store = createStore(rootReducer, {
    movie: initialState
}) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

 afterEach(cleanup);

it('checks initial state is equal to 0', () => {
  const { getByTestId } = renderWithRedux(<MoviesCounter />, {
    movie: initialState
  })
  //console.log(getByTestId('movies2'))
  expect(getByTestId('movies2')).toHaveTextContent('NO MOVIES FOUND')
  })
