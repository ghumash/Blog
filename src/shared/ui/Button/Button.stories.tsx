import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from '.'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeS = Template.bind({})
OutlineSizeS.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.S,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeS = Template.bind({})
SquareSizeS.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.S,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
