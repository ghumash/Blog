import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Drawer } from './Drawer'

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'mobile drawer',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'mobile drawer',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
