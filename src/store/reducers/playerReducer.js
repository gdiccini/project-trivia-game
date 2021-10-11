import {
  SET_PLAYER_NAME, SET_PLAYER_EMAIL, SET_PLAYER_TOKEN } from '../actions/actionTypes';

const INITIAL_PLAYER_STATE = {
  name: '',
  token: '',
  email: '',
};

export default (state = INITIAL_PLAYER_STATE, action) => {
  switch (action.type) {
  case SET_PLAYER_NAME:
    return {
      ...state,
      name: action.name,
    };
  case SET_PLAYER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  case SET_PLAYER_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};
