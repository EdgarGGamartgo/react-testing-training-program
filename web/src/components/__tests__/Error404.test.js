import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Error404 } from './../Error404'

afterEach(cleanup)

it('should take a snapshot of Error404 presentational component', () => {
    const { asFragment } = render(<Error404 />)

    expect(asFragment(<Error404 />)).toMatchSnapshot()
})
