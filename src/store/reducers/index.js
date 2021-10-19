import { combineReducers } from 'redux';
import player from './playerReducer';
import questions from './questionsReducer';

const rootReducer = combineReducers({ player, questions });

export default rootReducer;
