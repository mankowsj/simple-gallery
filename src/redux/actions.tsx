import {AppModeActionType} from './types';

const setGalleryMode = (): AppModeActionType => ({type: 'GALLERY_MODE'});
const setBigPictureMode = (picId: string): AppModeActionType => ({type: 'BIG_PIC_MODE', value: picId});

export {setGalleryMode, setBigPictureMode};
