import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text, TextSize, TextTheme } from 'shared/ui/Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Title lorem ipsun',
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'Description Description Description Description',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Lorem Ipsum',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nam nihil quidem saepe, sed soluta! Aspernatur assumenda ducimus eum fugiat laboriosam nihil obcaecati possimus quam, quibusdam repellat, sint soluta voluptates?',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nam nihil quidem saepe, sed soluta! Aspernatur assumenda ducimus eum fugiat laboriosam nihil obcaecati possimus quam, quibusdam repellat, sint soluta voluptates',
  size: TextSize.L,
}
