import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../redux';
import {Header} from '../header';
import {Gallery} from '../gallery';
import {Footer} from '../footer';
import './app.styles.pcss';

export const App = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Gallery className="grow" />
      <Footer />
    </div>
  </Provider>
);
