import {AppModeActionType, ThemeActionType} from './types';

const setGalleryMode = (): AppModeActionType => ({type: 'GALLERY_MODE'});
const setBigPictureMode = (): AppModeActionType => ({type: 'BIG_PIC_MODE'});

const setSelectedImage = (index: number) => ({type: 'SET_SELECTED_IMAGE', value: index});

const setThemeLightMode = (): ThemeActionType => ({type: 'SET_THEME', value: 'theme-light'});
const setThemeDarkMode = (): ThemeActionType => ({type: 'SET_THEME', value: 'theme-dark'});

export {setGalleryMode, setBigPictureMode, setSelectedImage};
