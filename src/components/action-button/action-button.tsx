import React from 'react';
import {IconButton} from '@components/icon-button';
import './action-button.styles.pcss';

type ActionButtonProps = React.ComponentProps<typeof IconButton> & {
  colors?: [string, string];
};

const getColorStyle = (colors: string[] | undefined) => (colors ? {color: colors[0], background: colors[1]} : {});

const ActionButton = ({colors, onClick, className, ...rest}: ActionButtonProps) => (
  <span onClick={onClick} style={getColorStyle(colors)} className={`${className} action-button`}>
    <IconButton {...rest} />
  </span>
);
ActionButton.defaultProps = {
  ...IconButton.defaultProps
};

export {ActionButton};
