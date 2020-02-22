import React from 'react';
import './slider.styles.pcss';
import {SliderSmallPic} from '../slider-small-pic';

type SliderProps = {
  images: ReduxImage[];
  selectedIndex: number;
  className?: string;
  onChange?: () => void;
};

const getEmptyImageList = (length: number): ReduxImage[] =>
  Array(length)
    .fill(1)
    .map((v, idx) => ({name: String(idx), path: ''}));
const reduceImages = (list: ReduxImage[], selectedIndex: number): ReduxImage[] => {
  let start = selectedIndex - 2;
  let end = selectedIndex + 2;
  let startArray = [] as any;
  let endArray = [] as any;
  if (start < 0) {
    startArray = getEmptyImageList(Math.abs(start));
    start = 0;
  }

  if (end > list.length) {
    endArray = getEmptyImageList(Math.abs(end));
    end = list.length - 1;
  }

  const result = startArray.concat(list.slice(start, end + 1), endArray);
  return result;
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
