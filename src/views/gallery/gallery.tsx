import React from 'react';

type GalleryProps = {
  className: string;
};
const Gallery = ({className}: GalleryProps) => (
  <section className={className}>gallery</section>
);
Gallery.defaultProps = {
  className: ''
};

export {Gallery};
