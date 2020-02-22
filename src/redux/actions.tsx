import {AppModeActionType} from './types';

const setGalleryMode = (picId: string): AppModeActionType => ({type: 'GALLERY_MODE', value: picId});
const setBigPictureMode = (picId: string): AppModeActionType => ({type: 'BIG_PIC_MODE', value: picId});

export {setGalleryMode, setBigPictureMode};
