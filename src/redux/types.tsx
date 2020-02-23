import {AppModeAction, PositionAction, ImageAction, ThemeAction} from './actions-names';

type ActionType<T, S> = {
  type: T;
  value: S;
};
type SimpleActionType<T> = {
  type: T;
};
type AppModeType = 'GALLERY_MODE' | 'BIG_PIC_MODE';
type PositionActionType = SimpleActionType<PositionAction>;
type AppModeActionType = ActionType<AppModeAction, String>;

type ImageStore = {imageList: ReduxImage[]; selectedIndex: number};
type ImageSelectedAction = ActionType<Extract2<ImageAction, 'SET_SELECTED_IMAGE_ID'>, ImageStore['selectedIndex']>;
type ImageRemoveAction = ActionType<Extract2<ImageAction, 'REMOVE_IMAGE'>, ImageStore['selectedIndex']>;
type ImageRenameAction = ActionType<
  Extract2<ImageAction, 'SET_IMAGE_NAME'>,
  {index: ImageStore['selectedIndex']; value: string}
>;
type ImageListAction = ActionType<Extract2<ImageAction, 'SET_IMAGE_LIST'>, ImageStore['imageList']>;
type ImageActionType = ImageSelectedAction | ImageListAction | ImageRemoveAction | ImageRenameAction;

type ThemeValues = 'theme-light' | 'theme-dark';
type ThemeActionType = ActionType<ThemeAction, ThemeValues>;

type StoreType = {
  positionReducer: number;
  appModeReducer: AppModeType;
  imageReducer: ImageStore;
  themeReducer: ThemeValues;
};

export {
  AppModeAction,
  AppModeActionType,
  PositionActionType,
  ImageActionType,
  StoreType,
  ThemeActionType,
  ThemeValues,
  AppModeType
};
