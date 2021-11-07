import {LOGIN, LOGOUT} from './type';
import {Dispatch} from 'redux';


export const login = (user) => (dispatch) =>
  dispatch({type: LOGIN, payload: user});

export const logout = () => (dispatch) =>
  dispatch({type: LOGOUT});
