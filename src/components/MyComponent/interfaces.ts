import { ReactChild, HTMLAttributes } from 'react'

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild
}
