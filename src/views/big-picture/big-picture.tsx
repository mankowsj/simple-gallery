import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {setAppMode, removeImage, setSelectedImage} from '@redux/actions';
import {StoreType} from '@redux';
import {ActionButton} from '@components/action-button';
import {ImageDetails} from '@components/image-details';
import {Pic} from '@components/pic';

type BigPictureProps = {
  className?: string;
  appMode: StoreType['appModeReducer'];
  setAppMode: typeof setAppMode;
  imageList: ReduxImage[];
  selectedIndex: number;
  removeImage: typeof removeImage;
  setSelectedImage: typeof setSelectedImage;
};

const getVisibilityModifier = (appMode: StoreType['appModeReducer']) => {
  switch (appMode) {
    case 'BIG_PIC_MODE': {
      return 'is-visible';
    }
    case 'BIG_PIC_CLOSING': {
      return 'exiting';
    }
  }
  return '';
};

const BigPicture = ({
  className,
  setAppMode,
  appMode,
  imageList,
  selectedIndex,
  removeImage,
  setSelectedImage
}: BigPictureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const focusRef = () => ref.current?.focus();
  const selectedImage = imageList.find(({index}) => index === selectedIndex);

  useEffect(focusRef, [ref]);
  useEffect(() => {
    setAppMode('BIG_PIC_MODE');
  }, [setAppMode]);

  return (
    <div
      tabIndex={0}
      onKeyUp={({key}) => {
        switch (key) {
          case 'Escape':
            return setAppMode('BIG_PIC_CLOSING');
          case 'ArrowRight':
            return setSelectedImage(selectedIndex + 1);
          case 'ArrowLeft':
            return setSelectedImage(selectedIndex - 1);
        }
        return;
      }}
      ref={ref}
      className={`${className} big-pic-flex white-preloader`}>
      <main
        onTransitionEnd={() => {
          if (appMode === 'BIG_PIC_CLOSING') {
            setAppMode('GALLERY_MODE');
          }
        }}
        className={`big-picture ${getVisibilityModifier(appMode)}`}>
        <nav>
          <span className="pic-title nowrap">Filename: {selectedImage?.filename ?? false}</span>
          <ActionButton size={40} onClick={() => setAppMode('BIG_PIC_CLOSING')} name="close" />
        </nav>
        <section className="selected-image-container">
          {selectedImage ? (
            <React.Fragment>
              <div className="pic-container">
                <Pic src={selectedImage.filepath} />
              </div>
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

const mapStateToProps = ({imageReducer, appModeReducer}: StoreType) => ({
  imageList: imageReducer.imageList,
  selectedIndex: imageReducer.selectedIndex,
  appMode: appModeReducer
});
const ConnectedBigPicture = connect(mapStateToProps, {setAppMode, removeImage, setSelectedImage})(BigPicture);

export {ConnectedBigPicture as BigPicture};
