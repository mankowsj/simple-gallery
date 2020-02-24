import {updateStore} from '../image-storage';
import {ImageActionType} from './types';
import {ImageAction} from './actions-names';

const imageAction: ImageAction[] = ['REMOVE_IMAGE', 'SET_IMAGE_LIST', 'SET_IMAGE_NAME'];

export const storageMiddleware = ({getState}: any) => (next: any) => (action: ImageActionType) => {
  const result = next(action);
  if (imageAction.includes(action.type)) {
    const {imageList} = getState().imageReducer;
    updateStore(imageList);
  }

  return result;
};
