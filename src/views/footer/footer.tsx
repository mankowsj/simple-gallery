import React from 'react';
import './footer.styles.pcss';

type FooterProps = {className: string};

const Footer = ({className}: FooterProps) => (
  <footer className="secondary-dark">
    <div className={`${className} narrow flex`}>
      <section>
        <h3>Tools</h3>
        <ul>
          <li>Webpack 4</li>
          <li>Visual Studio Code</li>
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          <li>Typescript 3.7</li>
          <li>PCSS</li>
          <li>HTML5</li>
        </ul>
      </section>
      <section>
        <h3>Libraries</h3>
        <ul>
          <li>React 16</li>
          <li>Redux / React-Redux</li>
        </ul>
      </section>
    </div>
  </footer>
);

Footer.defaultProps = {
  className: ''
};

export {Footer};
