import {StoreType, ImageActionType} from '../types';
import {getImageList} from '../../image-storage';

const defaultValue = {imageList: getImageList(), selectedIndex: 0};

const findNextIndex = (selectedId: number, list: ReduxImage[]): number => {
  const currentIndex = list.findIndex(({index}) => index === selectedId);
  if (currentIndex > -1) {
    if (list[currentIndex + 1]) {
      return list[currentIndex + 1].index;
    }
    if (list[currentIndex - 1]) {
      return list[currentIndex - 1].index;
    }
  }

  return currentIndex;
};

export const imageReducer = (
  state: StoreType['imageReducer'] = defaultValue,
  action: ImageActionType
): StoreType['imageReducer'] => {
  switch (action.type) {
    case 'REMOVE_IMAGE': {
      const imageList = state.imageList.filter((image: ReduxImage) => image.index !== action.value);
      const selectedIndex = findNextIndex(action.value, state.imageList);
      return {
        ...state,
        imageList,
        selectedIndex
      };
    }
    case 'SET_SELECTED_IMAGE_ID': {
      if (state.imageList.find(({index}) => action.value === index)) {
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
