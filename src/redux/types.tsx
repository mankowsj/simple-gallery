import {PositionList, AppMode} from './actions';

type ActionType<T, S = never> = {
  type: T;
  value?: S;
};

type PositionActionType = ActionType<typeof PositionList[number]>;
type AppModeActionType = ActionType<typeof AppMode[number]>;

type StoreType = {
  positionReducer: number;
  appModeReducer: typeof AppMode[number];
};

export {AppModeActionType, PositionActionType, StoreType};
