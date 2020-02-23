import React from 'react';
import {IconButton} from '@components/icon-button';
import './action-button.styles.pcss';

type ActionButtonProps = React.ComponentProps<typeof IconButton> & {
  onBlack?: boolean;
  color?: string;
};

const getColorStyle = (color: string | undefined) => (color ? {color} : {});

const ActionButton = ({onBlack, color, onClick, className, ...rest}: ActionButtonProps) => (
  <span
    onClick={onClick}
    style={getColorStyle(color)}
    className={`${className} ${onBlack ? 'black-style' : ''} action-button`}>
    <IconButton {...rest} />
  </span>
);
ActionButton.defaultProps = {
  ...IconButton.defaultProps
};

export {ActionButton};
