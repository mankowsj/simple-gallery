import React from 'react';
import {connect} from 'react-redux';
import './gallery.styles.pcss';
import {GridImage} from '../../components/grid-image';
import {setAppMode, setSelectedImage} from '../../redux/actions';
import {StoreType} from '../../redux';

type GalleryProps = {
  className?: string;
  style?: React.CSSProperties;
  setAppMode: typeof setAppMode;
  setSelectedImage: typeof setSelectedImage;
  imageList: ReduxImage[];
};
const Gallery = ({className, setAppMode, imageList, setSelectedImage, style}: GalleryProps) => (
  <main style={style} className={`${className} gallery`}>
    {imageList.map(({filepath, filename, index}) => (
      <GridImage
        onClick={() => {
          setSelectedImage(index);
          setAppMode('BIG_PIC_OPENING');
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
  className: '',
  style: {}
};

const ConnectedGallery = connect(({imageReducer}: StoreType) => ({imageList: imageReducer.imageList}), {
  setAppMode,
  setSelectedImage
})(Gallery);

export {ConnectedGallery as Gallery};
