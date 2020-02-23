import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '@redux';
import './header.styles.pcss';
import {Switch} from '../../components/switch';
import '../../redux/actions';

type HeaderProps = {
  className: string;
};

const Header = ({className}: HeaderProps) => (
  <header className="secondary-light">
    <div className="whitening">
      <section className="narrow header-content">
        <div className="left vertical-fix">
          {/* <span className={`${className} header-icon`} /> */}
          <span>Simple Gallery</span>
        </div>

        <div className="controls vertical-fix">
          <Switch labels={['Light mode', 'Dark mode']} />
        </div>
      </section>
    </div>
  </header>
);

Header.defaultProps = {
  className: ''
};

const mapStateToProps = (state: StoreType) => ({});
const ConnectedHeader = connect(mapStateToProps)(Header);

export {ConnectedHeader as Header};
