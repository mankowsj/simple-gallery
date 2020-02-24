import React from 'react';
import './icon-button.styles.pcss';

/** icons v1 **/

// const IconMap = {
//   grid: 'e800',
//   list: 'e801',
//   close: 'e802',
//   download: 'e803'
// };
const IconMap = {
  download: 'e804',
  delete: 'e800',
  list: 'e0ca',
  grid: 'e803',
  edit: 'e801',
  close: 'e802',
  zoom: 'f07e',
  help: 'e805'
};
type IconName = keyof typeof IconMap;

type IconButtonProps = {
  className?: string;
  name: IconName;
  size?: number;
  onClick?: React.MouseEventHandler;
};
const getStyle = (size: number | undefined) => (size ? {width: `${size}px`, height: `${size}px`} : {});
const IconButton = ({name, onClick, size}: IconButtonProps) => (
  <span
    style={getStyle(size)}
    onClick={onClick}
    dangerouslySetInnerHTML={{__html: `&#x${IconMap[name]};`}}
    className="icon-button"
  />
);
IconButton.defaultProps = {
  className: '',
  onClick: () => {}
};

export {IconButton};
