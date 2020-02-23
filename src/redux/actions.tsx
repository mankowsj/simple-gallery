import {AppModeActionType, ThemeActionType, ThemeValues, ImageActionType} from './types';

type AppModeType = 'GALLERY_MODE' | 'BIG_PIC_MODE';

const setAppMode = (mode: AppModeType): AppModeActionType => ({type: 'SET_APP_MODE', value: mode});
const setSelectedImage = (index: number): ImageActionType => ({
  type: 'SET_SELECTED_IMAGE_ID',
  value: index
});

const setTheme = (value: ThemeValues): ThemeActionType => ({type: 'SET_THEME', value});

export {setAppMode, setSelectedImage, setTheme, AppModeType};
