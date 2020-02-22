import React, {useState} from 'react';
import './grid-image.styles.pcss';

type GridImageProps = {
  className: string;
  imageName: string;
  imageSrc: string;
};
const GridImage = ({className, imageName, imageSrc}: GridImageProps) => {
  const [hovered, setHover] = useState(false);

  return (
    <div className={`${className} grid-image vertical-fix`}>
      <img
        className={hovered ? 'zoom-in' : ''}
        src={imageSrc}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};
GridImage.defaultProps = {
  className: ''
};

export {GridImage};
