import * as type from '../types';

const initialState = {
  botaoClicado: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case type.BOTAO_CLICADO_SUCCESS: {
      console.log('Successo');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case type.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisicao ');
      return state;
    }
    case type.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro ');
      return state;
    }
    default:
      return state;
  }
}
