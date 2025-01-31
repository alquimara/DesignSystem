import React, { useState } from 'react'
import { styled } from 'styled-components'

export interface AbGrupoOpçoo {
    id:number;
    titulo:string;
    corpo:string;
    rodape:string;

} 

export interface AbGrupoOpçoesProps {
    opcoes: AbGrupoOpçoo[];
    valorPadraão?: AbGrupoOpçoo | null;
    onChange?: (opcao: AbGrupoOpçoo) => void;
}
const SectionEstilizada = styled.section<{selecionado:boolean}>`
background: ${(props)=> props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);'
: '#ffff'};

width: 194px;;
height: 88px;
border-radius:8px;
border: 1px solid ${(props)=> props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);'
: '#EB9B00'};;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 10px;
cursor: pointer;
font-family:Arial, Helvetica, sans-serif;
header{
    color:${(props)=> props.selecionado ? '#FFF'
: '#EB9B00'};
    font-size: 12px;
    font-weight: 400;
}
strong{
    color:${(props)=> props.selecionado ? '#FFF'
: '#EB9B00'};
    font-weight: 700;
    font-size: 16px;
}
footer{
    color:${(props)=> props.selecionado ? '#FFF'
: 'rgba(0, 0, 0, 0.54)'};
    font-size: 12px;
    font-weight: 400;

}


`
export const AbGrupoOpçoes = ({opcoes,onChange,valorPadraão}:AbGrupoOpçoesProps) => {
    const [selecao, setSelecao] = useState<AbGrupoOpçoo | null >(valorPadraão ?? null)
    const handleSelecionado =(opcao:AbGrupoOpçoo)=>{
        setSelecao(opcao)
        if(onChange){
            onChange(opcao)
        }

    }
  return (
    <>
    {opcoes.map((opcao:AbGrupoOpçoo) => (
        <SectionEstilizada selecionado={selecao?.id===opcao.id}
        key={opcao.id} 
        onClick={()=>handleSelecionado(opcao)
        
        } 
        >
            <header>{opcao.titulo}</header>
            <strong>{opcao.corpo}</strong>
            <footer>{opcao.rodape}</footer>
        </SectionEstilizada>
    ))}
 
    </>
  )
}
