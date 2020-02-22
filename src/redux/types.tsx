import {AppModeAction, PositionAction} from './actions-names';

type ActionType<T, S = never> = {
  type: T;
  value?: S;
};

type PositionActionType = ActionType<PositionAction>;
type AppModeActionType = ActionType<AppModeAction, String>;

type StoreType = {
  positionReducer: number;
  appModeReducer: AppModeAction;
};

export {AppModeAction, AppModeActionType, PositionActionType, StoreType};
