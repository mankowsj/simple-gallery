import React from 'react';
import './header.styles.pcss';
import {Switch} from '../../components/switch';

type HeaderProps = {
  className: string;
};

const Header = ({className}: HeaderProps) => (
  <header className="secondary-light">
    <div className="whitening">
      <section className="narrow vertical-fix">
        <span className={`${className} header-icon`} />
        <span>Simple Gallery</span>

        <div className="controls">
          <Switch labels={['Light mode', 'Dark mode']} />
        </div>
      </section>
    </div>
  </header>
);

Header.defaultProps = {
  className: ''
};

export {Header};
