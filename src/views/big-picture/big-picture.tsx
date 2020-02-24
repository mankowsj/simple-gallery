import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {setAppMode, removeImage, setSelectedImage} from '@redux/actions';
import {StoreType} from '@redux';
import {ActionButton} from '@components/action-button';
import {ImageDetails} from '@components/image-details';

type BigPictureProps = {
  className?: string;
  setAppMode: typeof setAppMode;
  imageList: ReduxImage[];
  selectedIndex: number;
  removeImage: typeof removeImage;
  setSelectedImage: typeof setSelectedImage;
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

const BigPicture = ({
  className,
  setAppMode,
  imageList,
  selectedIndex,
  removeImage,
  setSelectedImage
}: BigPictureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const focusRef = () => ref.current?.focus();
  const [isVisible, setVisibility] = useState(0);
  const selectedImage = imageList.find(({index}) => index === selectedIndex);

  console.warn('selectedIndex', selectedIndex, imageList);

  useEffect(focusRef, [ref]);
  useEffect(() => {
    setVisibility(1);
  }, []);

  return (
    <div
      tabIndex={0}
      onKeyUp={({key}) => {
        switch (key) {
          case 'Escape':
            return setVisibility(2);
          case 'ArrowRight':
            return setSelectedImage(selectedIndex + 1);
          case 'ArrowLeft':
            return setSelectedImage(selectedIndex - 1);
        }
      }}
      ref={ref}
      className={`${className} big-pic-flex`}>
      <main
        onTransitionEnd={ev => {
          if (isExiting(isVisible)) {
            setAppMode('GALLERY_MODE');
          }
        }}
        className={`big-picture ${getVisibilityModifier(isVisible)}`}>
        <nav>
          <span className="pic-title">Filename: {selectedImage?.filename ?? false}</span>
          <ActionButton size={40} onClick={() => setVisibility(2)} name="close" />
        </nav>
        <section className="selected-image-container">
          {selectedImage ? (
            <React.Fragment>
              <img src={selectedImage.filepath} />
              <ImageDetails
                onEditModeChange={(editMode: boolean) => !editMode && focusRef()}
                onRemoval={index => {
                  removeImage(index);
                }}
                image={selectedImage}
                className="selected-image-details"
              />
            </React.Fragment>
          ) : (
            false
          )}
        </section>
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
const ConnectedBigPicture = connect(mapStateToProps, {setAppMode, removeImage, setSelectedImage})(BigPicture);

export {ConnectedBigPicture as BigPicture};
