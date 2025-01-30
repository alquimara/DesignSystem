import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {AbBotao, AbBotaoProps} from '../src'

export default{
    title:'componentes/AbBotao',
    component:AbBotao
} as ComponentMeta<typeof AbBotao>

const template:ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>
export const Primario = template.bind({})
Primario.args = {
    texto:'Login',
    tipo:'primario'
    
} as AbBotaoProps
export const Secundario = template.bind({})
Secundario.args = {
    texto:'Cadastre-se',
    tipo:'secundario'
    
} as AbBotaoProps