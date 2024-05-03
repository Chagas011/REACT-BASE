import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  font-size: 20pt;
  small {
    font-size: 32pt;
    margin-left: 20px;
    color: blue;
  }
`;

export const Paragrafo = styled.p`
  color: brown;
  font-size: 30pt;
`;
