import React from 'react';

// import { Container } from './styles';
import styled from '@emotion/styled';
import { primeiraMaiuscula } from '../../Helper';

import PropTypes from 'prop-types'

const ContainerResumo = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

function Resumo({ dados }) {
  // extrair dados
  const { marca, year, plan } = dados;

  if(marca === '' || year === '' || plan === '') return null;

  return(
      <ContainerResumo>
        <h1>Resumo da cotação</h1>
        <ul>
            <li>Marca: {primeiraMaiuscula(marca)}</li>
            <li>Plan: {primeiraMaiuscula(plan)}</li>
            <li>Year: {year}</li>
        </ul>
      </ContainerResumo>
  );
}

Resumo.propTypes = {
  dados: PropTypes.object.isRequired,
}

export default Resumo;