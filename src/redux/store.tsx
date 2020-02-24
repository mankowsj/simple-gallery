import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';
import {storageMiddleware} from './middleware';

export const store = createStore(reducers, {}, applyMiddleware(storageMiddleware));
