import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {setGalleryMode} from '@redux/actions';
import {StoreType} from '@redux';
import {IconButton} from '@components/icon-button';
import {Slider} from '@components/slider';
import {ImageDetails} from '@components/image-details';

type BigPictureProps = {
  className?: string;
  setGalleryMode: any;
  imageList: ReduxImage[];
  selectedIndex: number;
};

const VisiblityMap = {
  NotVisible: 0,
  Visible: 1,
  Exiting: 2
};

const getVisibilityModifier = (state: number) => {
  switch (state) {
    case VisiblityMap.Visible: {
      return 'is-visible';
    }
    case VisiblityMap.Exiting: {
      return 'exiting';
    }
  }
  return '';
};
const isExiting = (status: number) => status === VisiblityMap.Exiting;

const BigPicture = ({className, setGalleryMode, imageList, selectedIndex}: BigPictureProps) => {
  const [isVisible, setVisibility] = useState(0);
  const selectedImage = imageList[selectedIndex];

  useEffect(() => {
    setVisibility(1);
  }, []);

  return (
    <div className={`${className} big-pic-flex`}>
      <main
        onTransitionEnd={() => {
          if (isExiting(isVisible)) {
            setGalleryMode();
          }
        }}
        className={`big-picture ${getVisibilityModifier(isVisible)}`}>
        <nav>
          <IconButton
            onClick={() => {
              setVisibility(2);
            }}
            name="close"
          />
        </nav>
        <section className="selected-image-container">
          <img src={selectedImage.path} />
          <ImageDetails image={selectedImage} className="selected-image-details" />
        </section>
        <Slider className="bottom-slider" images={imageList} selectedIndex={selectedIndex} />
      </main>
    </div>
  );
};
BigPicture.defaultProps = {
  className: ''
};

const mapStateToProps = ({imageReducer}: StoreType) => ({
  imageList: imageReducer.imageList,
  selectedIndex: imageReducer.selectedIndex
});
const ConnectedBigPicture = connect(
  mapStateToProps,
  {setGalleryMode}
)(BigPicture);

export {ConnectedBigPicture as BigPicture};
