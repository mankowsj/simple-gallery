import React from 'react';
import ReactDom from 'react-dom';
import {App} from './views/app';
import './global-styles/index.pcss';

ReactDom.render(<App />, document.querySelector('#app'));
