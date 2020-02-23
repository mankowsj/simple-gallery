import {StoreType, ImageActionType} from '../types';

const pathPrefix = 'src/assets/images/';
const extension = '.jpg';

const imageList = ['1', '2', '3', '4', '5', '6', '7', '8'].map(filename => ({
  filename,
  filepath: `${pathPrefix}${filename}${extension}`,
  location: pathPrefix,
  extension
}));
const defaultValue = {imageList, selectedIndex: 0};

export const imageReducer = (
  state: StoreType['imageReducer'] = defaultValue,
  action: ImageActionType
): StoreType['imageReducer'] => {
  console.warn('imageReducer', action);
  if (action.type === 'SET_SELECTED_IMAGE_ID') {
    return {...state, selectedIndex: action.value};
  }
  return state;
};
