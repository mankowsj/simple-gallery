import React from 'react';
import './IconButton.styles.pcss';

const IconMap = {
  download: 'e804',
  delete: 'e800',
  list: 'e0ca',
  grid: 'e803',
  edit: 'e801',
  close: 'e802',
  zoom: 'f07e',
  help: 'e805',
  undo: 'e806'
};
type IconName = keyof typeof IconMap;

type IconButtonProps = {
  name: IconName;
  size?: number;
  onClick?: React.MouseEventHandler;
};
const getStyle = (size?: number) => (size ? {width: `${size}px`, height: `${size}px`} : {});
const IconButton = ({name, onClick = () => {}, size}: IconButtonProps) => (
  <span
    style={getStyle(size)}
    onClick={onClick}
    dangerouslySetInnerHTML={{__html: `&#x${IconMap[name]};`}}
    className="icon-button"
  />
);

export {IconButton};
