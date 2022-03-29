import React, { FC } from 'react'
import testId from '../helpers/testId'

import { MyComponentProps } from './interfaces'

import { Button } from './styles'

export const MyComponent: FC<MyComponentProps> = React.memo(({ children }) => {
  return <Button {...testId('my-component-wrapper')}>{children}</Button>
})
