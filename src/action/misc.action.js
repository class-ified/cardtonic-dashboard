import {
  ONBOARDED,
  TOGGLE_BALANCE,
  UPDATE_SETTINGS,
  UPDATE_USERS_BANKS,
} from './type';
import {Dispatch} from 'redux';

export const setUsersBanks =
  (banks) => (dispatch) => {
    return dispatch({type: UPDATE_USERS_BANKS, payload: banks});
  };

export const toggleBalanceHidden = () => (dispatch) =>
  dispatch({type: TOGGLE_BALANCE});

export const setServerSettings =
  (settings) => (dispatch) =>
    dispatch({type: UPDATE_SETTINGS, payload: settings});
