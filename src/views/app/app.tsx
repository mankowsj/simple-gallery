import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StoreType} from '../../redux';
import {Header} from '../header';
import {Gallery} from '../gallery';
import {BigPicture} from '../big-picture';
import {Footer} from '../footer';
import './app.styles.pcss';
import {FooterContext} from '../../footer-context';

type AppProps = {
  appMode: StoreType['appModeReducer'];
  theme: StoreType['themeReducer'];
};

const getBigPictureStyle = (isBigPictureMode: boolean) => (isBigPictureMode ? {maxHeight: '100vh'} : {});

const App = ({appMode, theme}: AppProps) => {
  const isBigPictureMode = appMode === 'BIG_PIC_MODE';
  const ctx = useState(FooterContext);
  // const Body = appMode === 'GALLERY_MODE' ? Gallery : BigPicture;

  return (
    // @ts-ignore
    <FooterContext.Provider value={ctx}>
      <div className={`app ${theme} background`} style={getBigPictureStyle(isBigPictureMode)}>
        <Header />
        <Gallery className="grow narrow" />
        {isBigPictureMode ? <BigPicture /> : false}
        <Footer />
      </div>
    </FooterContext.Provider>
  );
};

const mapStateToProps = (state: StoreType) => ({appMode: state.appModeReducer, theme: state.themeReducer});

type ConnectedAppProps = Omit<AppProps, 'appMode' | 'theme'>;
const ConnectedApp = connect(mapStateToProps)(App);
export {ConnectedApp as App};
