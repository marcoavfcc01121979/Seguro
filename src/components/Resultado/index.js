import React from 'react';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PropTypes from 'prop-types'

// import { Container } from './styles';
const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotacao = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

const TextoCotacao = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

function Resultado({ cotacao }) {
  return(
      (cotacao === 0) ? <Message>Mostra a marca, ano e tipo de seguro </Message> :
      (
        <ResultadoCotacao>
          <TransitionGroup
            component="span"
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={cotacao}
              timeout={{ enter: 500, exit: 500 }}
            > 
              <TextoCotacao>O total é: R$ <span>{cotacao.toFixed(2)}</span> </TextoCotacao>
            </CSSTransition>
          </TransitionGroup>
        </ResultadoCotacao>
      ) 
  );
}

Resultado.propTypes = {
  cotacao: PropTypes.number.isRequired,
}

export default Resultado;