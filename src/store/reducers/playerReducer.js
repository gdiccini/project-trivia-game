import {
  GET_PLAYER_NAME, GET_PLAYER_EMAIL, GET_PLAYER_TOKEN } from '../actions/actionTypes';

const INITIAL_PLAYER_STATE = {
  name: '',
  token: '',
  email: '',
};

export default (state = INITIAL_PLAYER_STATE, action) => {
  switch (action.type) {
  case GET_PLAYER_NAME:
    return {
      ...state,
      name: action.name,
    };
  case GET_PLAYER_EMAIL:
    return {
      ...state,
      name: action.email,
    };
  case GET_PLAYER_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};
