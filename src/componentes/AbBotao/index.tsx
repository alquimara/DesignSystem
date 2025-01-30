import React from 'react'
import styled from 'styled-components'


export interface AbBotaoProps {
  texto?:string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
background-color:${(props:AbBotaoProps)=> props.tipo === 'primario' ? '#EB9B00' : '#fff'};
padding: 16px 32px;
border:2px solid #EB9B00;
color:${(props:AbBotaoProps)=> props.tipo === 'primario' ? '#fff' : '#EB9B00'};
font-size: 20px;
cursor: pointer;
&:hover{
    background-color: ${(props:AbBotaoProps)=> props.tipo === 'primario' ? '#B87900' : '#fff'};
    border:2px solid #B87900;
    color:${(props:AbBotaoProps)=> props.tipo === 'primario' ? '#fff' : '#B87900'};
}


`

export const AbBotao = ({texto, onClick,tipo='primario'}:AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo} >{texto}</BotaoEstilizado>
  )
}
