import React from 'react'
import { render } from '@testing-library/react'
import { MyComponent } from './'

describe(':: MyComponent', () => {
  it('Should render the component', () => {
    const { getByTestId } = render(<MyComponent>valid-text</MyComponent>)
    expect(getByTestId('my-component-wrapper')).toBeTruthy()
  })

  it('Should render given text', () => {
    const { getByText } = render(<MyComponent>valid-text</MyComponent>)
    expect(getByText('valid-text')).toBeTruthy()
  })
})
