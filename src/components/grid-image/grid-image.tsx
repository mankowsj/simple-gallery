import React, {useState} from 'react';
import './grid-image.styles.pcss';

type GridImageProps = {
  className: string;
  imageName: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler;
};
const GridImage = ({className, imageName, imageSrc, onClick}: GridImageProps) => {
  const [hovered, setHover] = useState(false);

  return (
    <div className={`${className} grid-image vertical-fix`}>
      <img
        onClick={onClick}
        className={hovered ? 'zoom-in' : ''}
        src={imageSrc}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};
GridImage.defaultProps = {
  className: '',
  onClick: () => {}
};

export {GridImage};
