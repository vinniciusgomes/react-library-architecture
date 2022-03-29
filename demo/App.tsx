import React, { FC } from 'react'

import { MyComponent } from '../src'

import { Column } from './styled'

export const App: FC = () => {
  return (
    <Column>
      <h1>Create your demo app</h1>
      <MyComponent>
        <span>Teste</span>
      </MyComponent>
    </Column>
  )
}
