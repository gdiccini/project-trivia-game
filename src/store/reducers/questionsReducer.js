import { SET_QUESTIONS } from '../actions/actionTypes';

const INITIAL_QUESTIONS_STATE = {
  questions: [],
};

export default (state = INITIAL_QUESTIONS_STATE, action) => {
  switch (action.type) {
  case SET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  default:
    return state;
  }
};
