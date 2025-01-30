import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../.';
import { AbCard } from '../src/componentes/AbCard';
import styled from 'styled-components';

const Titulo = styled.h1`
color:#EB9B00;
font-size: 32px;
font-weight: 700;
font-family:'poppins';
line-height: 48px;

`
const App = () => {
  return (
    <div>
     <AbBotao/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));


