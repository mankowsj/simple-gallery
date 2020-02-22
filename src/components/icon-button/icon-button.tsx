import React from 'react';
import './icon-button.styles.pcss';

const IconMap = {
  grid: '800',
  list: '801',
  close: '802',
  download: '803'
};
type IconName = keyof typeof IconMap;

type IconButtonProps = {
  name: IconName;
  onClick?: React.MouseEventHandler;
};
const IconButton = ({name, onClick}: IconButtonProps) => (
  <span onClick={onClick} dangerouslySetInnerHTML={{__html: `&#xe${IconMap[name]};`}} className="icon-button" />
);
IconButton.defaultProps = {
  onClick: () => {}
};

export {IconButton};
