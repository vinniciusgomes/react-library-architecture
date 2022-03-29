import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyComponent } from './MyComponent'

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  onClick: { action: 'clicked' },
} as ComponentMeta<typeof MyComponent>

const Template: ComponentStory<typeof MyComponent> = (args) => (
  <MyComponent {...args}>Click me</MyComponent>
)

export const Default = Template.bind({})
Default.args = {}
