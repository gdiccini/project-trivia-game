import {
  SET_PLAYER_NAME, SET_PLAYER_EMAIL, SET_PLAYER_TOKEN, SET_QUESTIONS,
} from './actionTypes';
import { getQuestions } from '../../services/api';

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

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const fetchQuestions = (token) => (
  (dispatch) => getQuestions(token)
    .then((data) => dispatch(setQuestions(data)))
);
