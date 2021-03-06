import React, { useState } from 'react'
import Header from './components/Header';

import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumo from './components/Resumo';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Conteiner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ConteinerFormaulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

const App = ( ) => {
  const [resumo, setResumo] = useState({
    cotacao: 0,
    dados: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [carregando, setCarregando] = useState(false);

  // extrair dados
  const { cotacao ,dados } = resumo; 

  return (
    <Conteiner>
      <Header titulo='Cotação de seguros' />

      <ConteinerFormaulario>
        <Formulario 
          setResumo={setResumo}
          setCarregando={setCarregando}
        />

        {carregando ? <Spinner /> : null}

      <Resumo 
        dados={dados}
      />

      {!carregando ?
        <Resultado 
          cotacao={cotacao}
        /> : null
      }

      
      </ConteinerFormaulario>
    </Conteiner>
  );
}

export default App;
