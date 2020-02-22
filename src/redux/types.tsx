import {AppModeAction, PositionAction, ImageAction} from './actions-names';

type ActionType<T, S = never> = {
  type: T;
  value?: S;
};

type PositionActionType = ActionType<PositionAction>;
type AppModeActionType = ActionType<AppModeAction, String>;

type ImageStore = {imageList: ReduxImage[]; selectedIndex: number};
type ImageActionType = ActionType<ImageAction, ImageStore>;

type StoreType = {
  positionReducer: number;
  appModeReducer: AppModeAction;
  imageReducer: ImageStore;
};

export {AppModeAction, AppModeActionType, PositionActionType, ImageActionType, StoreType};
