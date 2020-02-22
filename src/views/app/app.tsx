import React from 'react';
import {Header} from '../header';
import {Gallery} from '../gallery';
import {Footer} from '../footer';
import './app.styles.pcss';

export const App = () => (
  <div className="app theme-light">
    <Header />
    <Gallery className="grow narrow" />
    <Footer />
  </div>
);
