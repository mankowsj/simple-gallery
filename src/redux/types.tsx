import {AppModeAction, PositionAction, ImageAction, ThemeAction} from './actions-names';

type ActionType<T, S = never> = {
  type: T;
  value?: S;
};

type PositionActionType = ActionType<PositionAction>;
type AppModeActionType = ActionType<AppModeAction, String>;

type ImageStore = {imageList: ReduxImage[]; selectedIndex: number};
type ImageActionType = ActionType<ImageAction, ImageStore>;

type ThemeValues = 'theme-light' | 'theme-dark';
type ThemeActionType = ActionType<ThemeAction, ThemeValues>;

type StoreType = {
  positionReducer: number;
  appModeReducer: AppModeAction;
  imageReducer: ImageStore;
  themeReducer: ThemeValues;
};

export {AppModeAction, AppModeActionType, PositionActionType, ImageActionType, StoreType, ThemeActionType};
