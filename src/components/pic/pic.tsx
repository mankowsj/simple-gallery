import React, {useState} from 'react';
import {data} from '../../../mock/page-data';

const altImageFilepath = 'src/assets/no-image.jpg';

type PicProps = {
  src: string;
  className: string;
  onClick?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
};
const Pic = ({src, ...rest}: PicProps) => {
  const [error, setError] = useState(false);

  return <img src={error ? altImageFilepath : src} {...rest} onError={() => setError(true)} />;
};
Pic.defaultProps = {
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
  className: ''
};

export {Pic};
