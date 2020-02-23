import {StoreType, AppModeActionType} from '../types';

type AppModeStore = StoreType['appModeReducer'];

export const appModeReducer = (state: AppModeStore = 'GALLERY_MODE', action: AppModeActionType) => {
  if (action.type === 'SET_APP_MODE') {
    return action.value;
  }
  return state;
};
