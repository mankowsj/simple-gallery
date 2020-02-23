import {AppModeActionType, ThemeActionType, ThemeValues} from './types';

const setGalleryMode = (): AppModeActionType => ({type: 'GALLERY_MODE'});
const setBigPictureMode = (): AppModeActionType => ({type: 'BIG_PIC_MODE'});

const setSelectedImage = (index: number) => ({type: 'SET_SELECTED_IMAGE', value: index});

const setTheme = (value: ThemeValues): ThemeActionType => ({type: 'SET_THEME', value});

export {setGalleryMode, setBigPictureMode, setSelectedImage, setTheme};
