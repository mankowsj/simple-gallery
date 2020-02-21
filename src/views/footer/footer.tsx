import React from 'react';
import './footer.styles.pcss';

export const Footer = () => (
  <footer>
    <div className="narrow flex">
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
        <h3>Coded and styled by Jerzy Mańkowski</h3>
      </section>
    </div>
  </footer>
);
