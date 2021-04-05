import React from 'react';

type ImageObj = {
  filename: string;
  width: string;
  height: string;
  location: string;
  extension: string;
};

const getDefaultImageData = (str = 'loading'): ImageObj => ({
  height: str,
  filename: str,
  width: str,
  location: str,
  extension: str
});

const getTableRow = (desc: string, value: string | JSX.Element, button?: JSX.Element | boolean) => (
  <tr>
    <td>{desc}</td>
    <td>{value}</td>
    <td>{button ?? false}</td>
  </tr>
);

const getInputStyle = (editMode: boolean): React.CSSProperties =>
  editMode ? {} : {visibility: 'hidden', maxWidth: '1px'};
const getEditButtonStyle = (isVisible: boolean): React.CSSProperties =>
  isVisible
    ? {}
    : {
        pointerEvents: 'none',
        opacity: 0
      };

export {getInputStyle, getEditButtonStyle, getTableRow, getDefaultImageData, ImageObj};
