import React, { FC } from 'react'
import testId from '../helpers/testId'
import { MyComponentProps } from './interfaces'
import { MyComponentStyled } from './styles'

export const MyComponent: FC<MyComponentProps> = React.memo(
  ({ children, ...divProps }) => {
    return (
      <MyComponentStyled {...testId('my-component-wrapper')} {...divProps}>
        {children}
      </MyComponentStyled>
    )
  }
)
