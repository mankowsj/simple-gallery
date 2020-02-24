import React, {useState} from 'react';
import {data} from '../../../mock/page-data';

const altImageFilepath = 'src/assets/no-image.jpg';

type PicProps = {
  style: React.CSSProperties;
  src: string;
  className: string;
  onClick?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
};
const Pic = ({src, className, style, ...rest}: PicProps) => {
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <React.Fragment>
      <img
        style={style}
        className={className}
        onLoad={() => setReady(true)}
        src={error ? altImageFilepath : src}
        {...rest}
        onError={() => setError(true)}
      />
      {ready ? false : <span className="preloader" />}
    </React.Fragment>
  );
};
Pic.defaultProps = {
  style: {},
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
  className: ''
};

export {Pic};
