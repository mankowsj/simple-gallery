import React, {useContext, useRef, useEffect} from 'react';
import './footer.styles.pcss';
import {FooterContext} from '../../footer-context';

type FooterProps = {className: string};

const Footer = ({className}: FooterProps) => {
  const ref = useRef(null);
  const [ctx, setContext] = useContext(FooterContext);

  useEffect(() => {
    setContext(ref.current);
  }, [ref, setContext]);

  return (
    <footer ref={ref} className="secondary-dark">
      <div className={`${className} narrow flex`}>
        <section>
          <h3>Tools</h3>
          <ul>
            <li>Webpack 4</li>
            <li>Visual Studio Code</li>
            <li>FontForge</li>
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
            <li>normalize.css</li>
          </ul>
        </section>
        <section>
          <h3>Supported browsers</h3>
          <ul>
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Edge</li>
          </ul>
        </section>
        <section>
          <h3>Attributions</h3>
          <ul>
            <li>
              <a href="https://www.freeiconspng.com/img/23480">Pictures No Icon</a>
            </li>
            <li>
              <a href="https://www.svgbackgrounds.com/">svgbackgrounds.com</a>
            </li>
            <li>
              <a href="src/assets/LICENSE.txt">Fontello icon fonts Licence</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
Footer.defaultProps = {
  className: ''
};

export {Footer};
