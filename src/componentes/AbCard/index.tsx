import React from 'react'
import styled from 'styled-components'


const CardEstilizado = styled.div`
background-color: #FFFFFF;;
padding: 48px 32px 48px 48px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
display: inline-block;


`
interface AbCardProps {
    children: React.ReactNode;
  }

export const AbCard = ({children}:AbCardProps) => {
  return (
    <CardEstilizado>
        {children}
    </CardEstilizado>
  )
}
