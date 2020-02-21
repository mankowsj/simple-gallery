import {createStore} from 'redux';
import {reducers} from './reducers';
import {StoreType} from './types';

const initialStore = {
  position: 0
};

export const store = createStore(reducers);
