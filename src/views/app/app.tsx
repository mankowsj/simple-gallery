import React from 'react';
import {connect} from 'react-redux';
import {AppModeAction, StoreType} from '../../redux';
import {Header} from '../header';
import {Gallery} from '../gallery';
import {BigPicture} from '../big-picture';
import {Footer} from '../footer';
import './app.styles.pcss';

type AppProps = {
  appMode: AppModeAction;
};

const App = ({appMode}: AppProps) => {
  console.warn('App', appMode);
  const Body = appMode === 'GALLERY_MODE' ? Gallery : BigPicture;

  return (
    <div className="app theme-light background">
      <Header />
      <Body className="grow narrow" />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: StoreType) => ({appMode: state.appModeReducer});

type ConnectedAppProps = Omit<AppProps, 'appMode'>;
const ConnectedApp = (connect(mapStateToProps)(App) as any) as React.ComponentClass<ConnectedAppProps>;
export {ConnectedApp as App};
