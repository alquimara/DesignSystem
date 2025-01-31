import React from 'react'
import { styled } from 'styled-components'

interface AbTagProps {
    texto:string
}


const TagEstilizada = styled.div`
background-color: #EB9B00;
padding: 24px 32px;
color: #fff;
font-size: 24px;
font-family:'poppins';
text-align: center;
display: inline-block;

`


export const AbTag = ({texto}:AbTagProps) => {
  return (
    <TagEstilizada>{texto}</TagEstilizada>
  )
}
