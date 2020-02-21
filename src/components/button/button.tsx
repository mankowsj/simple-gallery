import React from 'react';

type ButtonProps = {
  onClick: React.MouseEventHandler;
};
export const Button = ({onClick}: ButtonProps) => (
  <button onClick={onClick}>Add</button>
);
