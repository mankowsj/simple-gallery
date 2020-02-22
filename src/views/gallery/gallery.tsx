import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './gallery.styles.pcss';
import {GridImage} from '../../components/grid-image';
import {setBigPictureMode} from '../../redux/actions';

const pathPrefix = 'src/assets/images/';
const imageList = ['1', '2', '3', '4', '5', '6', '7', '8'].map(name => `${name}.jpg`);

type GalleryProps = {
  className: string;
  setBigPictureMode: any;
};
const Gallery = ({className, setBigPictureMode}: GalleryProps) => (
  <main className={`${className} gallery`}>
    {imageList.map(imgName => (
      <GridImage
        onClick={() => setBigPictureMode(imgName)}
        key={imgName}
        className="grid-item"
        imageName={imgName}
        imageSrc={`${pathPrefix}${imgName}`}
      />
    ))}
  </main>
);
Gallery.defaultProps = {
  className: ''
};

const mapStateToDispatch = (dispatch: any) => ({});
const ConnectedGallery = (connect(
  null,
  {setBigPictureMode}
)(Gallery) as any) as React.ComponentClass<Omit<GalleryProps, 'setBigPictureMode'>>;

export {ConnectedGallery as Gallery};
