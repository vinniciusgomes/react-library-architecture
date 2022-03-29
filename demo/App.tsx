import React, { FC } from 'react'

import { MyComponent } from '../src'

import { Column } from './styled'

export const App: FC = () => {
  return (
    <Column>
      <MyComponent>
        <span>Teste</span>
      </MyComponent>
    </Column>
  )
}
