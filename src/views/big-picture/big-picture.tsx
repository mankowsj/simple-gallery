import React from 'react';
import {IconButton} from '../../components/icon-button';
// import {} from '../../components/slider-big-pic';

type BigPictureProps = {
  className?: string;
};
const BigPicture = ({className}: BigPictureProps) => {
  return (
    <main className={`${className} gallery`}>
      <section className="big-picture">
        <nav>
          <IconButton name="close" />
        </nav>
      </section>
    </main>
  );
};
BigPicture.defaultProps = {
  className: ''
};

export {BigPicture};
