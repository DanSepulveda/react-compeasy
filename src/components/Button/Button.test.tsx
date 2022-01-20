import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button Component', () => {
    test('renders the Button component', () => {
        render(<Button label='Hello world!' />)
    })
    test('it should be disabled', () => {
        render(<Button label='Send message' disabled />)
        expect(screen.getByText('Send message')).toBeDisabled
    })
})