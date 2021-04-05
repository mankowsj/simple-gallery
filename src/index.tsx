import React from 'react';
import {render} from 'react-dom';
import {App} from './views/App';
import {Provider} from 'react-redux';
import {store} from './redux';
import './global-styles/index.pcss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
