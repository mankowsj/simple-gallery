import {AppModeActionType, ThemeActionType, ThemeValues, ImageActionType, AppModeType} from './types';

const setAppMode = (mode: AppModeType): AppModeActionType => ({type: 'SET_APP_MODE', value: mode});
const setSelectedImage = (index: number): ImageActionType => ({
  type: 'SET_SELECTED_IMAGE_ID',
  value: index
});
const removeImage = (index: number): ImageActionType => ({
  type: 'REMOVE_IMAGE',
  value: index
});
const renameImage = (index: number, name: string): ImageActionType => ({
  type: 'SET_IMAGE_NAME',
  value: {index, value: name}
});

const setTheme = (value: ThemeValues): ThemeActionType => ({type: 'SET_THEME', value});

export {setAppMode, setSelectedImage, setTheme, removeImage};
