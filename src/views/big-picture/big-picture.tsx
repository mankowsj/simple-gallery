import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {setAppMode, removeImage} from '@redux/actions';
import {StoreType} from '@redux';
import {ActionButton} from '@components/action-button';
import {ImageDetails} from '@components/image-details';

type BigPictureProps = {
  className?: string;
  setAppMode: typeof setAppMode;
  imageList: ReduxImage[];
  selectedIndex: number;
  removeImage: typeof removeImage;
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

const BigPicture = ({className, setAppMode, imageList, selectedIndex, removeImage}: BigPictureProps) => {
  const [isVisible, setVisibility] = useState(0);
  const selectedImage = imageList[selectedIndex];

  useEffect(() => {
    setVisibility(1);
  }, []);

  return (
    <div className={`${className} big-pic-flex`}>
      <main
        onTransitionEnd={ev => {
          if (isExiting(isVisible)) {
            setAppMode('GALLERY_MODE');
          }
        }}
        className={`big-picture ${getVisibilityModifier(isVisible)}`}>
        <nav>
          <ActionButton
            size={40}
            onClick={() => {
              setVisibility(2);
            }}
            name="close"
          />
        </nav>
        <section className="selected-image-container">
          <img src={selectedImage.filepath} />
          <ImageDetails
            onRemoval={index => {
              removeImage(index);
              setVisibility(2);
            }}
            image={selectedImage}
            className="selected-image-details"
          />
        </section>
        {/* <Slider className="bottom-slider" images={imageList} selectedIndex={selectedIndex} /> */}
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
const ConnectedBigPicture = connect(mapStateToProps, {setAppMode, removeImage})(BigPicture);

export {ConnectedBigPicture as BigPicture};
