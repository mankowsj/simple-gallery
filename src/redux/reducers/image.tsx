import {StoreType, ImageActionType} from '../types';

const pathPrefix = 'src/assets/images/';

const imageList = ['1', '2', '3', '4', '5', '6', '7', '8'].map(name => ({name, path: `${pathPrefix}${name}.jpg`}));
const defaultValue = {imageList, selectedIndex: 0};

export const imageReducer = (
  state: StoreType['imageReducer'] = defaultValue,
  action: ImageActionType
): StoreType['imageReducer'] => {
  console.warn('imADSSADAS', action);
  return state;
};
