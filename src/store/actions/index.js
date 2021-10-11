import { SET_PLAYER_NAME, SET_PLAYER_EMAIL, SET_PLAYER_TOKEN } from './actionTypes';

export const setPlayerName = (name) => ({
  type: SET_PLAYER_NAME,
  name,
});

export const setPlayerEmail = (email) => ({
  type: SET_PLAYER_EMAIL,
  email,
});

export const setPlayerToken = (token) => ({
  type: SET_PLAYER_TOKEN,
  token,
});
