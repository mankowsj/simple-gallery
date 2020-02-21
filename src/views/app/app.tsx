import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../redux';
import {Gallery} from '../gallery';
import './app.styles.pcss';

export const App = () => (
  <Provider store={store}>
    <div>
      <header />
      <Gallery />
    </div>
  </Provider>
);
