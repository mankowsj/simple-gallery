import React from 'react';
import './gallery.styles.pcss';
import {GridImage} from '../../components/grid-image';

const pathPrefix = 'src/assets/images/';
const imageList = ['1', '2', '3', '4', '5', '6', '7', '8'];

type GalleryProps = {
  className: string;
};
const Gallery = ({className}: GalleryProps) => (
  <section className={`${className} gallery`}>
    {imageList.map(imgName => (
      <GridImage
        key={imgName}
        className="grid-item"
        imageName={imgName}
        imageSrc={`${pathPrefix}${imgName}.jpg`}
      />
    ))}
  </section>
);
Gallery.defaultProps = {
  className: ''
};

export {Gallery};
