import {StoreType, ImageActionType} from '../types';
import {getImageList} from '../../image-storage';

const defaultValue = {imageList: getImageList(), selectedIndex: 0};

const findNextIndex = <T extends []>(index: number, list: T): number => {
  if (list[index]) {
    return index;
  }
  if (list[index - 1]) {
    return index - 1;
  }

  return 0;
};

export const imageReducer = (
  state: StoreType['imageReducer'] = defaultValue,
  action: ImageActionType
): StoreType['imageReducer'] => {
  switch (action.type) {
    case 'REMOVE_IMAGE': {
      const imageList = state.imageList.filter((image: ReduxImage) => image.index !== action.value);
      const selectedIndex = findNextIndex<any>(action.value, imageList);
      return {
        ...state,
        imageList,
        selectedIndex
      };
    }
    case 'SET_SELECTED_IMAGE_ID': {
      if (action.value > -1 && action.value < state.imageList.length) {
        return {...state, selectedIndex: action.value};
      }
      break;
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
