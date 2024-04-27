import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;


  }

  body {
    font-family: sans-serif;
    background: #333399;

  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 480px;
  max-height: 1000px;
  background: #fff;
  margin: 30px auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
