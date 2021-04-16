import React, { useState } from 'react';

// import { Container } from './styles';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { calculaPlano, calcularMarca, obterDiferencaAno } from '../../Helper';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Botao = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6DA;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

function Formulario({ setResumo, setCarregando }) {
  const [dados, setDados] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [ error, setError ] = useState(false);

  // Extrair dados do formulario
  const { marca, year, plan } = dados;

  // ler os dados do formulario e colocar on estado
  const obterInformacao = e => {
    setDados({
      ...dados,
      [e.target.name] : e.target.value
    })
  }

  //quando o usuario pressiona submit
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    } 

    setError(false);

    // Uma base 2000
    let resultado = 2000;

    // obter a diferença de anos
    const diferenca = obterDiferencaAno(year);

    // por cada ano tem que resta 3%
    resultado -= (( diferenca * 3 ) * resultado) / 100;

    // Americano 15%
    // Asiatico 3%
    // Europeu 30%
    resultado = calcularMarca(marca) * resultado;

    // Basico aumenta 20%
    // Completo 50%
    /*resultado = calculaPlano(plan) * resultado;
    console.log(resultado);*/
    const incrementoPlano = calculaPlano(plan);
    resultado = parseFloat(incrementoPlano * resultado).toFixed(2);
    
    // Total

    setCarregando(true);

    setTimeout(() => {
      //Elimina o spinner
      setCarregando(false);

      // passa a informação ao componente principal
      setResumo({
        cotacao: Number(resultado),
        dados
      })
    }, 3000);
  } 

  return(
      <form onSubmit={cotizarSeguro}>
        {error ? <Error>Todos os campos são obrigatorios.</Error> : null}
          <Campo>
              <Label>Marca</Label>
              <Select
                name="marca"
                value={marca}
                onChange={obterInformacao}
              >
                  <option value="">-- Selecione --</option>
                  <option value="americano">Americano</option>
                  <option value="europeu">Europeu</option>
                  <option value="asiatico">Asiatico</option>
              </Select>
          </Campo>

          <Campo>
              <Label>Ano</Label>
              <Select
                name="year"
                value={year}
                onChange={obterInformacao}
              >
                <option value="">-- Seleccione --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
              </Select>
          </Campo>

          <Campo>
              <Label>Plano</Label>
              <InputRadio 
                type="radio"
                name="plan"
                value="basico"
                checked={plan === 'basico'}
                onChange={obterInformacao}
              /> Basico

              <InputRadio 
                type="radio"
                name="plan"
                value="completo"
                checked={plan === 'completo'}
                onChange={obterInformacao}
              /> Completo
          </Campo>

          <Botao type="submit">Cotação de preços</Botao>
      </form>
  );
}

Formulario.propTypes = {
  setResumo: PropTypes.func.isRequired,
  setCarregando: PropTypes.func.isRequired
}

export default Formulario;