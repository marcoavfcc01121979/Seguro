import React from 'react';
import styled from '@emotion/styled'

// import { Container } from './styles';
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

function Header({ titulo }) {
  return(
      <ContenedorHeader>
          <TextHeader>{titulo}</TextHeader>
      </ContenedorHeader>
      
  );
}

export default Header;