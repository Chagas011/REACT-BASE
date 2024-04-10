import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed>
        login pages
        <small>teste</small>
      </Title>
      <Paragrafo>testeeee</Paragrafo>
      <a href="">testeeee</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
