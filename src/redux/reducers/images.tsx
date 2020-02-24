import {StoreType, ImageActionType} from '../types';
import {getImageList} from '../../image-storage';

const defaultValue = {imageList: getImageList(), selectedIndex: 0};

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
    case 'SET_IMAGE_LIST': {
      return {...state, imageList: action.value};
    }
  }
  return state;
};
