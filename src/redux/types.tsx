import {AppModeAction, PositionAction, ImageAction, ThemeAction} from './actionNames';

type ActionType<T, S> = {
  type: T;
  value: S;
};
type SimpleActionType<T> = {
  type: T;
};
type AppModeType = 'GALLERY_MODE' | 'BIG_PIC_MODE' | 'BIG_PIC_CLOSING' | 'BIG_PIC_OPENING';
type PositionActionType = SimpleActionType<PositionAction>;
type AppModeActionType = ActionType<AppModeAction, AppModeType>;

type ImageStore = {imageList: ReduxImage[]; selectedIndex: number};
type ImageSelectedAction = ActionType<
  ExtractFromType<ImageAction, 'SET_SELECTED_IMAGE_ID'>,
  ImageStore['selectedIndex']
>;
type ImageRemoveAction = ActionType<ExtractFromType<ImageAction, 'REMOVE_IMAGE'>, ImageStore['selectedIndex']>;
type ImageRenameAction = ActionType<
  ExtractFromType<ImageAction, 'SET_IMAGE_NAME'>,
  {index: ImageStore['selectedIndex']; value: string}
>;
type ImageListAction = ActionType<ExtractFromType<ImageAction, 'SET_IMAGE_LIST'>, ImageStore['imageList']>;
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
