import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {IconButton} from '../../components/icon-button';
import {setGalleryMode} from '../../redux/actions';
// import {} from '../../components/slider-big-pic';

type BigPictureProps = {
  className?: string;
  setGalleryMode: any;
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
      return '';
    }
  }
  return '';
};

const BigPicture = ({className, setGalleryMode}: BigPictureProps) => {
  const [isVisible, setVisibility] = useState(0);

  useEffect(() => {
    setVisibility(1);
  }, []);

  return (
    <main className={`${className} gallery`}>
      <section className={`big-picture ${getVisibilityModifier(isVisible)}`}>
        <nav>
          <IconButton
            onClick={() => {
              console.warn('CLC');
              setGalleryMode();
            }}
            name="close"
          />
        </nav>
      </section>
    </main>
  );
};
BigPicture.defaultProps = {
  className: ''
};

const ConnectedBigPicture = connect(
  null,
  {setGalleryMode}
)(BigPicture);

export {ConnectedBigPicture as BigPicture};
