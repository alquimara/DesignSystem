import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {AbTag} from '../src/componentes/AbTag'

export default{
    title:'componentes/AbTag',
    component:AbTag
} as ComponentMeta<typeof AbTag>

const template:ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>
export const Primario = template.bind({})
Primario.args = {
    texto:'Android', 
} 
