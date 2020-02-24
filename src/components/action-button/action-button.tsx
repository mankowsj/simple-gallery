import React from 'react';
import {IconButton} from '@components/icon-button';
import './action-button.styles.pcss';

type ActionButtonProps = React.ComponentProps<typeof IconButton> & {
  colors?: [string, string];
  style?: React.CSSProperties;
  label?: string;
};

const getColorStyle = (colors: string[] | undefined) => (colors ? {color: colors[0], background: colors[1]} : {});

const ActionButton = ({colors, onClick, style, className, label, ...rest}: ActionButtonProps) => (
  <span onClick={onClick} style={{...getColorStyle(colors), ...style}} className={`${className} action-button`}>
    {label ? <label>{label}</label> : false}
    <IconButton {...rest} />
  </span>
);
ActionButton.defaultProps = {
  ...IconButton.defaultProps,
  style: {}
};

export {ActionButton};
