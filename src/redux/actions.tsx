import {AppModeActionType} from './types';

const setGalleryMode = (): AppModeActionType => ({type: 'GALLERY_MODE'});
const setBigPictureMode = (): AppModeActionType => ({type: 'BIG_PIC_MODE'});

const setSelectedImage = (index: number) => ({type: 'SET_SELECTED_IMAGE', value: index});

export {setGalleryMode, setBigPictureMode, setSelectedImage};
