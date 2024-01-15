import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Button } from '../../../Button'
import { Popover } from './Popover'

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {
  trigger: <Button>Open</Button>,
}
Normal.decorators = [StoreDecorator({})]
