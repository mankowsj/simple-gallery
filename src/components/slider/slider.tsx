import React from 'react';
import './slider.styles.pcss';
import {SliderSmallPic} from '../slider-small-pic';

type SliderProps = {
  images: ReduxImage[];
  selectedIndex: number;
  className?: string;
  onChange?: () => void;
};

const reduceImages = (list: ReduxImage[], selectedIndex: number) => {
  return list;
};

const Slider = ({className, images, selectedIndex}: SliderProps) => (
  <div className={`${className} slider`}>
    {reduceImages(images, selectedIndex).map(image => (
      <SliderSmallPic className="slider-item" image={image} key={image.name} />
    ))}
  </div>
);
Slider.defaultProps = {
  className: '',
  onChange: () => {}
};

export {Slider};
