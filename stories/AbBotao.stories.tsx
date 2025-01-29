import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {AbBotao} from '../src'

export default{
    title:'componentes/AbBotao',
    component:AbBotao
} as ComponentMeta<typeof AbBotao>

const template:ComponentStory<typeof AbBotao> = () => <AbBotao/>
export const Primario = template.bind({})