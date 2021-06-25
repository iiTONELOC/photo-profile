
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact component renders', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('rendersFragment', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    })

})


it('rendersH1tag', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('rendersSubmitBtn', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})