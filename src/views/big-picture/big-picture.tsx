import React from 'react';
import {connect} from 'react-redux';
import './big-picture.styles.pcss';
import {IconButton} from '../../components/icon-button';
import {setGalleryMode} from '../../redux/actions';
// import {} from '../../components/slider-big-pic';

type BigPictureProps = {
  className?: string;
  setGalleryMode: any;
};
const BigPicture = ({className, setGalleryMode}: BigPictureProps) => {
  return (
    <main className={`${className} gallery`}>
      <section className="big-picture">
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
