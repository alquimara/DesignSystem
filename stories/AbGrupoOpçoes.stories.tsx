import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {AbGrupoOpçoes} from '../src/componentes/AbGrupoOpçoes'

export default{
    title:'componentes/AbGrupoOpçoes',
    component:AbGrupoOpçoes
} as ComponentMeta<typeof AbGrupoOpçoes>

const Template: ComponentStory<typeof AbGrupoOpçoes> = (args) => <AbGrupoOpçoes {...args}/>;
export const Padrao = Template.bind({})
Padrao.args = {
    opcoes:[
        {id:1, titulo:'Ebook', corpo:'R$ 19,90', rodape:'.pdf, .epub, .mobi'},
        {id:2, titulo:'Impreso', corpo:'R$ 39,90', rodape:'.pdf, .epub, .mobi'},
        {id:3, titulo:'bibe', corpo:'R$ 59,90', rodape:'.pdf, .epub, .mobi'},
   
    ]
}