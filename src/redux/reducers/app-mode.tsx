import {StoreType, AppModeActionType} from '../types';

type AppModeStore = StoreType['appModeReducer'];

export const appModeReducer = (state: AppModeStore = 'GALLERY_MODE', action: AppModeActionType) => {
  console.warn('appModeReducer', state, action);
  return state;
};
