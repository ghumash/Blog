import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam culpa debitis dignissimos, dolorem dolores ea earum error esse eveniet fugiat id, ipsa ipsam iure magni maxime molestiae non officia quas qui quibusdam recusandae tempore tenetur ullam velit veniam voluptate voluptatem. Accusantium animi aspernatur assumenda atque aut autem corporis culpa distinctio dolores earum eos error, et in incidunt ipsa ipsum libero, magni molestiae neque nisi numquam odio odit omnis pariatur perferendis quaerat quam quas quibusdam repellendus repudiandae saepe unde voluptate voluptates. Deserunt, dicta impedit nam nihil porro quos rem voluptas! Alias aliquam consequatur enim iure magnam maiores mollitia odio ut',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam culpa debitis dignissimos, dolorem dolores ea earum error esse eveniet fugiat id, ipsa ipsam iure magni maxime molestiae non officia quas qui quibusdam recusandae tempore tenetur ullam velit veniam voluptate voluptatem. Accusantium animi aspernatur assumenda atque aut autem corporis culpa distinctio dolores earum eos error, et in incidunt ipsa ipsum libero, magni molestiae neque nisi numquam odio odit omnis pariatur perferendis quaerat quam quas quibusdam repellendus repudiandae saepe unde voluptate voluptates. Deserunt, dicta impedit nam nihil porro quos rem voluptas! Alias aliquam consequatur enim iure magnam maiores mollitia odio ut',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
