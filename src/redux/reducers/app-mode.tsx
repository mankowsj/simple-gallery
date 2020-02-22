import {StoreType, AppModeActionType} from '../types';

type AppModeStore = StoreType['appModeReducer'];

export const appModeReducer = (state: AppModeStore = 'GALLERY_MODE', action: AppModeActionType) => {
  switch (action.type) {
    case 'GALLERY_MODE':
      return action.type;
    case 'BIG_PIC_MODE':
      return action.type;
  }
  return state;
};
