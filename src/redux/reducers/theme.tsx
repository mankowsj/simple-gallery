import {StoreType, ThemeActionType} from '../types';

const defaultTheme = 'theme-light';
type ThemeStore = StoreType['themeReducer'];
export const themeReducer = (state: ThemeStore = defaultTheme, action: ThemeActionType) => {
  if (action.type === 'SET_THEME') {
    return action.value;
  }
  return state;
};
