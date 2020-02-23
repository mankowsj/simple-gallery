import {StoreType, ImageActionType} from '../types';

const pathPrefix = 'src/assets/images/';
const extension = '.jpg';

const imageList = ['1', '2', '3', '4', '5', '6', '7', '8'].map((filename, index) => ({
  filename,
  filepath: `${pathPrefix}${filename}${extension}`,
  location: pathPrefix,
  extension,
  index
}));
const defaultValue = {imageList, selectedIndex: 0};

export const imageReducer = (
  state: StoreType['imageReducer'] = defaultValue,
  action: ImageActionType
): StoreType['imageReducer'] => {
  switch (action.type) {
    case 'REMOVE_IMAGE': {
      const imageList = state.imageList.filter((image: ReduxImage) => image.index !== action.value);
      return {
        ...state,
        imageList
      };
    }
    case 'SET_SELECTED_IMAGE_ID': {
      return {...state, selectedIndex: action.value};
    }
    case 'SET_IMAGE_NAME': {
      const imageToChange = state.imageList.find((image: ReduxImage) => image.index === action.value.index);
      if (imageToChange?.filename) {
        imageToChange.filename = action.value.value;
      }

      return {...state, imageList: [...state.imageList]};
    }
  }
  return state;
};
