import React, {useState} from 'react';
import './GridImage.styles.pcss';
import {Pic} from '../Pic';
import {ActionButton} from '../ActionButton';

type GridImageProps = {
  className?: string;
  imageName: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler;
  dataId?: string;
};

export const GridImage = ({className = '', imageName, imageSrc, onClick, dataId}: GridImageProps) => {
  const [ready, setReady] = useState(false);

  return (
    <div data-id={dataId} onClick={onClick} className={`${className} grid-image ${ready ? 'ready' : ''}`}>
      <div className="img-height-wrapper">
        <Pic onLoad={() => setReady(true)} className="grid-image_pic" src={imageSrc} />
        <ActionButton size={16} colors={['white', 'rgba(0, 0, 0, 0.5)']} name="zoom" className="zoom-icon" />
        <label>Filename: {imageName}</label>
      </div>
    </div>
  );
};
