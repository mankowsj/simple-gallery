import {createContext, useContext} from 'react';

type Noop = () => void;

type FooterContextType = {setScrollToFooter: (fn: Noop) => void; scrollToFooter: Noop};
const FooterContext = createContext<FooterContextType | undefined>(undefined);

const useFooterContext = () => {
  const footerContext = useContext(FooterContext);
  if (!footerContext) {
    throw new Error('NO FOOTER');
  }
  return footerContext;
};
const FooterProvider = FooterContext.Provider;

export {FooterContext, useFooterContext, FooterProvider};
