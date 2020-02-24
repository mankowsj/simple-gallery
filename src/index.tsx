import React from 'react';
import ReactDom from 'react-dom';
import {App} from './views/app';
import {Provider} from 'react-redux';
import {store} from './redux';
import './global-styles/index.pcss';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
