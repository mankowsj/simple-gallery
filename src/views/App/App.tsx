import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {Header} from '../Header';
import {Gallery} from '../Gallery';
import {BigPicture} from '../BigPicture';
import {Footer} from '../Footer';
import './App.styles.pcss';
import {AppProvider} from '../../AppContext';

type AppProps = {
  appMode: StoreType['appModeReducer'];
  theme: StoreType['themeReducer'];
};

const getBigPictureStyle = (isBigPictureMode: boolean) =>
  isBigPictureMode ? {maxHeight: '100vh', overflow: 'hidden'} : {};

const App = ({appMode, theme}: AppProps) => {
  const shouldRenderBigPictureComonent = appMode !== 'GALLERY_MODE';
  const [scrollToFooter, setScrollToFooter] = useState(() => () => {});

  return (
    <AppProvider value={{setScrollToFooter, scrollToFooter}}>
      <div className={`app ${theme} background`} style={getBigPictureStyle(appMode === 'BIG_PIC_MODE')}>
        <Header/>
        <Gallery className="grow narrow"/>
        {shouldRenderBigPictureComonent && <BigPicture/>}
        <Footer/>
      </div>
    </AppProvider>
  );
};

const mapStateToProps = (state: StoreType) => ({appMode: state.appModeReducer, theme: state.themeReducer});

const ConnectedApp = connect(mapStateToProps)(App);
export {ConnectedApp as App};
