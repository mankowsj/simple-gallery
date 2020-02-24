import React, {useState} from 'react';
import './grid-image.styles.pcss';
import {Pic} from '@components/pic';
import {ActionButton} from '@components/action-button';

type GridImageProps = {
  className: string;
  imageName: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler;
  dataId?: string;
};
const GridImage = ({className, imageName, imageSrc, onClick, dataId}: GridImageProps) => {
  const [hovered, setHover] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      data-id={dataId}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${className} grid-image ${error ? 'no-image' : ''}`}>
      <div className="img-height-wrapper">
        <Pic className="grid-image_pic" src={imageSrc} />
        <ActionButton size={16} colors={['white', 'rgba(0, 0, 0, 0.5)']} name="zoom" className="zoom-icon" />
        <label>Filename: {imageName}</label>
      </div>
    </div>
  );
};
GridImage.defaultProps = {
  className: '',
  dataId: '',
  onClick: () => {}
};

export {GridImage};
