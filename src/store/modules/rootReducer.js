import { combineReducers } from 'redux';
import exapleReducer from './example/reducer';

export default combineReducers({
  example: exapleReducer,
});
