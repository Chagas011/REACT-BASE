import * as type from '../types';

const initialState = {
  botaoClicado: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case type.BOTAO_CLICADO: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
}
