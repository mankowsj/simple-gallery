import {createContext, useContext} from 'react';

type Noop = () => void;

type AppContextType = {setScrollToFooter: (fn: Noop) => void; scrollToFooter: Noop};
const AppContext = createContext<AppContextType | undefined>(undefined);

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('NO APP CONTEXT');
  }
  return appContext;
};
const AppProvider = AppContext.Provider;

export {AppContext, useAppContext, AppProvider};
