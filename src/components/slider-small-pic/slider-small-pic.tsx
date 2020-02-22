import React from 'react';
import './slider-small-pic.styles.pcss';

type SliderSmallPicProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
  image: ReduxImage;
};

const SliderSmallPic = ({onClick, className}: SliderSmallPicProps) => (
  <div onClick={onClick} className={`${className} slider-small-pic`}></div>
);

SliderSmallPic.defaultProps = {
  onClick: () => {},
  className: ''
};

export {SliderSmallPic};
