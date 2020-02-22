import {combineReducers} from 'redux';
import {appModeReducer} from './app-mode';
import {imageReducer} from './image';

export const reducers = combineReducers({appModeReducer, imageReducer});
