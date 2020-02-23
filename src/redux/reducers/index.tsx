import {combineReducers} from 'redux';
import {appModeReducer} from './app-mode';
import {imageReducer} from './images';
import {themeReducer} from './theme';

export const reducers = combineReducers({appModeReducer, imageReducer, themeReducer});
