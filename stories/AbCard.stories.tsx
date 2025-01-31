import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {AbCard} from '../src/componentes/AbCard'

export default{
    title:'componentes/AbCard',
    component:AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = (args) => <AbCard {...args} />;
export const Primario = Template.bind({})