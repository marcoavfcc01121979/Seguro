import React, { useState } from 'react'
import Header from './components/Header';

import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumo from './components/Resumo';

const Conteiner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ConteinerFormaulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resumo, setResumo] = useState({
    cotacao: 0,
    dados: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  // extrair dados
  const { dados } = resumo; 

  return (
    <Conteiner>
      <Header titulo='Cotação de seguros' />

      <ConteinerFormaulario>
        <Formulario 
          setResumo={setResumo}
        />

      <Resumo 
        dados={dados}
      />
      </ConteinerFormaulario>
    </Conteiner>
  );
}

export default App;
