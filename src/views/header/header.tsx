import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {setTheme} from '@redux/actions';
import {ThemeValues} from '@redux/types';
import './header.styles.pcss';
// import {Switch} from '@components/switch';
import {ActionButton} from '@components/action-button';

type HeaderProps = {
  className?: string;
  setTheme: typeof setTheme;
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
const gradient = 'linear-gradient(180deg, rgba(235, 179, 90, 1) 0%, rgba(223, 70, 96, 1) 100%)';

const Header = ({className, setTheme}: HeaderProps) => (
  <header className="secondary-light">
    <div className="whitening">
      <section className="narrow header-content">
        <div className="left vertical-fix">
          {/* <span className={`${className} header-icon`} /> */}
          <span>Simple Gallery</span>
        </div>

        <div className="controls vertical-fix">
          {/* <Switch onChange={(value: string) => setTheme(value as ThemeValues)} labels={themeList} /> */}
          <ActionButton label="About " name="help" colors={['white', gradient]} />
        </div>
      </section>
    </div>
  </header>
);

Header.defaultProps = {
  className: ''
};

const mapStateToProps = (state: StoreType) => ({selectedTheme: state.themeReducer});
const ConnectedHeader = connect(mapStateToProps, {setTheme})(Header);

export {ConnectedHeader as Header};
