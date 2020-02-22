import React from 'react';
import './header.styles.pcss';

type HeaderProps = {
  className: string;
};

const Header = ({className}: HeaderProps) => (
  <header className="secondary-light">
    <div className="whitening">
      <section className="narrow">
        <span className={`${className} header-icon`} />
        <span>Simple Gallery</span>
      </section>
    </div>
  </header>
);

Header.defaultProps = {
  className: ''
};

export {Header};
