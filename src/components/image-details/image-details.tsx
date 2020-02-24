import React, {useLayoutEffect, useState} from 'react';
import './image-details.styles.pcss';
import {ActionButton} from '@components/action-button';
import {ActionInput} from '@components/action-input';
import {connect} from 'react-redux';
import {removeImage, setAppMode, setImageName} from '@redux/actions';

type ImageDetails = {
  className?: string;
  image: ReduxImage;
  removeImage: typeof removeImage;
  setAppMode: typeof setAppMode;
  setImageName: typeof setImageName;
  onRemoval: (index: number) => void;
  onEditModeChange?: (editMode: boolean) => void;
};

const getImageData = (image: ReduxImage) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const imageObj = new Image();
    imageObj.onload = data => resolve(imageObj);
    imageObj.onerror = reject;
    imageObj.src = image.filepath;
  }).catch(err => ({inError: err}));

const getDefaultImageData = (str = 'loading'): ImageObj => ({
  height: str,
  filename: str,
  width: str,
  location: str,
  extension: str
});

type ImageObj = {
  filename: string;
  width: string;
  height: string;
  location: string;
  extension: string;
};

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

const ImageDetails = ({className, image, onRemoval, setImageName, onEditModeChange}: ImageDetails) => {
  const [imageData, setImageData] = useState(getDefaultImageData());
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useLayoutEffect(() => {
    getImageData(image).then(imageObj => {
      if (imageObj instanceof HTMLImageElement) {
        setImageData({
          width: String(imageObj.width),
          height: String(imageObj.height),
          filename: image.filename,
          location: image.location,
          extension: image.extension
        });
      } else {
        setImageData(getDefaultImageData('in error'));
      }
    });
  }, [image, editMode]);
  useLayoutEffect(() => {
    setInputValue('');
  }, [editMode, setInputValue]);
  const isImageOk = !isNaN(Number(imageData.width));

  return (
    <section className={`${className} image-details`}>
      <h4>Image data:</h4>
      <table cellPadding={6}>
        <tbody>
          {getTableRow(
            'Filename:',
            <React.Fragment>
              <ActionInput
                style={getInputStyle(editMode)}
                value={inputValue}
                onChange={(ev, value) => setInputValue(value)}
                className="filename-input"
                focus={editMode}
                placeholder={imageData.filename}
                initialValue={''}
                onSubmit={(name: string) => {
                  setImageName(image.index, name);
                  setEditMode(false);
                  onEditModeChange!(false);
                }}
                onCancel={() => {
                  setEditMode(false);
                  onEditModeChange!(false);
                }}
              />
              <span className="filename">{editMode ? '' : image.filename}</span>
            </React.Fragment>,
            <ActionButton
              style={getEditButtonStyle(!editMode && isImageOk)}
              colors={['black', 'white']}
              name="edit"
              onClick={() => {
                setEditMode(true);
                onEditModeChange!(true);
              }}
            />
          )}
          {getTableRow('Extension:', imageData.extension)}
          {getTableRow('Location:', imageData.location)}
          {getTableRow('Width:', imageData.width)}
          {getTableRow('Height:', imageData.height)}
        </tbody>
      </table>
      {isImageOk ? (
        <ActionButton
          className="remove"
          colors={['white', '#ff4343']}
          name="delete"
          onClick={() => {
            setEditMode(false);
            setImageData(getDefaultImageData(''));
            onRemoval(image.index);
          }}
        />
      ) : (
        false
      )}
    </section>
  );
};
ImageDetails.defaultProps = {
  className: '',
  onRemoval: () => {},
  onEditModeChange: () => {}
};

const ConnectedImageDetails = connect(null, {removeImage, setAppMode, setImageName})(ImageDetails);

export {ConnectedImageDetails as ImageDetails};
