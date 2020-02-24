import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {setTheme, setImageList} from '@redux/actions';
import {ThemeValues} from '@redux/types';
import './header.styles.pcss';
import {ActionButton} from '@components/action-button';
import {FooterContext} from '../../footer-context';
import {getDefaultImageList} from '../../image-storage';

type HeaderProps = {
  className?: string;
  setTheme: typeof setTheme;
  setImageList: typeof setImageList;
};

const themeList: {label: string; value: ThemeValues}[] = [
  {
    label: 'Light mode',
    value: 'theme-light'
  },
  {
    label: 'Dark mode',
    value: 'theme-dark'
  }
];
const lightThemeGradient = 'linear-gradient(180deg, rgba(235, 179, 90, 1) 0%, rgba(223, 70, 96, 1) 100%)';

const Header = ({className, setTheme, setImageList}: HeaderProps) => {
  const [ctx] = useContext(FooterContext);
  return (
    <header className={`${className} secondary-light`}>
      <div className="whitening">
        <section className="narrow header-content">
          <div className="left vertical-fix">
            {/* <span className={`${className} header-icon`} /> */}
            <span>Simple Gallery</span>
          </div>

          <nav className="controls vertical-fix">
            {/* <Switch onChange={(value: string) => setTheme(value as ThemeValues)} labels={themeList} /> */}
            <ActionButton
              onClick={() => (ctx as any)()}
              label="About page "
              name="help"
              className="control"
              colors={['white', lightThemeGradient]}
            />

            <ActionButton
              className="control"
              onClick={() => setImageList(getDefaultImageList())}
              label="Revert storage "
              name="undo"
              colors={['white', lightThemeGradient]}
            />
          </nav>
        </section>
      </div>
    </header>
  );
};

Header.defaultProps = {
  className: ''
};

const mapStateToProps = (state: StoreType) => ({selectedTheme: state.themeReducer});
const ConnectedHeader = connect(mapStateToProps, {setTheme, setImageList})(Header);

export {ConnectedHeader as Header};
