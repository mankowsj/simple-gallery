import {combineReducers} from 'redux';
import {StoreType} from './types';

type PositionStore = StoreType['positionReducer'];
const initialState = {position: 0};
const positionReducer = (
  state: PositionStore = initialState,
  action: any
): PositionStore => {
  console.warn('galleryPositionReducer', state, action);
  return state;
};

const Reducer2 = (state = {}) => {
  return state;
};

const reducers = combineReducers({positionReducer, Reducer2});

export {positionReducer, reducers};
