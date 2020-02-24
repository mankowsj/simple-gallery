import React from 'react';
import {connect} from 'react-redux';
import './gallery.styles.pcss';
import {GridImage} from '../../components/grid-image';
import {setAppMode, setSelectedImage} from '../../redux/actions';
import {StoreType} from '../../redux';

type GalleryProps = {
  className?: string;
  setAppMode: typeof setAppMode;
  setSelectedImage: typeof setSelectedImage;
  imageList: ReduxImage[];
};
const Gallery = ({className, setAppMode, imageList, setSelectedImage}: GalleryProps) => (
  <main className={`${className} gallery`}>
    {imageList.map(({filepath, filename}, index) => (
      <GridImage
        onClick={() => {
          setSelectedImage(index);
          setAppMode('BIG_PIC_MODE');
        }}
        key={filename}
        className="grid-item"
        imageName={filename}
        imageSrc={filepath}
      />
    ))}
  </main>
);
Gallery.defaultProps = {
  className: ''
};

const ConnectedGallery = connect(({imageReducer}: StoreType) => ({imageList: imageReducer.imageList}), {
  setAppMode,
  setSelectedImage
})(Gallery);

export {ConnectedGallery as Gallery};
