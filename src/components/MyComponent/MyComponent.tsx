import React, { FC } from 'react'

import testId from '../../helpers/testId'
import { MyComponentProps } from './interfaces'

import * as S from './styles'

export const MyComponent: FC<MyComponentProps> = React.memo(({ children }) => {
  return <S.Button {...testId('my-component-wrapper')}>{children}</S.Button>
})
