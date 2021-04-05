import React, {ComponentProps} from 'react';
import {IconButton} from '../IconButton';
import './ActionButton.styles.pcss';

type ActionButtonProps = ComponentProps<typeof IconButton> & {
  className?: string;
  colors?: [string, string];
  style?: React.CSSProperties;
  label?: string;
};

const getColorStyle = (colors?: [string, string]) => (colors ? {color: colors[0], background: colors[1]} : {});

export const ActionButton = ({colors, onClick, style, className, label, ...rest}: ActionButtonProps) => (
  <span
    tabIndex={0}
    onClick={onClick}
    style={{...getColorStyle(colors), ...style}}
    className={`${className} action-button`}>
    {label ? <label>{label}</label> : false}
    <IconButton {...rest} />
  </span>
);
