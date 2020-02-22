import React from 'react';
import {connect} from 'react-redux';
import './gallery.styles.pcss';
import {GridImage} from '../../components/grid-image';
import {setBigPictureMode, setSelectedImage} from '../../redux/actions';
import {StoreType} from '../../redux';

type GalleryProps = {
  className?: string;
  setBigPictureMode: any;
  setSelectedImage: any;
  imageList: ReduxImage[];
};
const Gallery = ({className, setBigPictureMode, imageList, setSelectedImage}: GalleryProps) => (
  <main className={`${className} gallery`}>
    {imageList.map(({path, name}, index) => (
      <GridImage
        onClick={() => {
          setSelectedImage(index);
          setBigPictureMode();
        }}
        key={name}
        className="grid-item"
        imageName={name}
        imageSrc={`${path}${name}`}
      />
    ))}
  </main>
);
Gallery.defaultProps = {
  className: ''
};

const ConnectedGallery = (connect(
  ({imageReducer}: StoreType) => ({imageList: imageReducer.imageList}),
  {setBigPictureMode, setSelectedImage}
)(Gallery) as any) as React.ComponentClass<Omit<GalleryProps, 'setBigPictureMode' | 'imageList' | 'setSelectedImage'>>;

export {ConnectedGallery as Gallery};
