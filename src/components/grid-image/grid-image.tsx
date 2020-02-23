import React, {useState} from 'react';
import './grid-image.styles.pcss';
import {Pic} from '@components/pic';

type GridImageProps = {
  className: string;
  imageName: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler;
};
const GridImage = ({className, imageName, imageSrc, onClick}: GridImageProps) => {
  const [hovered, setHover] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`${className} grid-image ${error ? 'no-image' : ''}`}>
      <Pic
        className="grid-image_pic"
        onClick={onClick}
        src={imageSrc}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <label>Filename: {imageName}</label>
    </div>
  );
};
GridImage.defaultProps = {
  className: '',
  onClick: () => {}
};

export {GridImage};
