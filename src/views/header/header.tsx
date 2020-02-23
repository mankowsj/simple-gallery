import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import {setTheme} from '@redux/actions';
import {ThemeValues} from '@redux/types';
import './header.styles.pcss';
import {Switch} from '../../components/switch';

type HeaderProps = {
  className: string;
  setTheme: any;
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

const Header = ({className, setTheme}: HeaderProps) => (
  <header className="secondary-light">
    <div className="whitening">
      <section className="narrow header-content">
        <div className="left vertical-fix">
          {/* <span className={`${className} header-icon`} /> */}
          <span>Simple Gallery</span>
        </div>

        <div className="controls vertical-fix">
          <Switch onChange={(value: string) => setTheme(value)} labels={themeList} />
        </div>
      </section>
    </div>
  </header>
);

Header.defaultProps = {
  className: ''
};

const mapStateToProps = (state: StoreType) => ({selectedTheme: state.themeReducer});
const ConnectedHeader = connect(
  mapStateToProps,
  {setTheme}
)(Header);

export {ConnectedHeader as Header};
