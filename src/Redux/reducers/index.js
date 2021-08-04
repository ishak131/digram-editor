import { combineReducers } from 'redux';
import nodeReducer from './node';;

const rootReducers = combineReducers({ nodeReducer });

export default rootReducers;
