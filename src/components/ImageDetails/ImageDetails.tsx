import React, {useLayoutEffect, useState} from 'react';
import {connect} from 'react-redux';
import {removeImage, setAppMode, setImageName} from '@redux/actions';
import './ImageDetails.styles.pcss';
import {ActionButton} from '../ActionButton';
import {getInputStyle, getEditButtonStyle, getTableRow, getDefaultImageData} from './helpers';
import {EditInput} from '../Input';

type ImageDetailsProps = {
  className?: string;
  image: ReduxImage;
  removeImage: typeof removeImage;
  setAppMode: typeof setAppMode;
  setImageName: typeof setImageName;
  onRemoval?: (index: number) => void;
  onEditModeChange?: (editMode: boolean) => void;
};

const getImageData = (image: ReduxImage) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const imageObj = new Image();
    imageObj.onload = () => resolve(imageObj);
    imageObj.onerror = reject;
    imageObj.src = image.filepath;
  }).catch(err => ({inError: err}));

const ImageDetails = ({className = '', image, onRemoval, setImageName, onEditModeChange}: ImageDetailsProps) => {
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
  useLayoutEffect(() => setInputValue(''), [editMode, setInputValue]);
  const isImageOk = !isNaN(Number(imageData.width));

  return (
    <section className={`${className} image-details`}>
      <h4>Image data:</h4>
      <table cellPadding={6}>
        <tbody>
          {getTableRow(
            'Filename:',
            <React.Fragment>
              <EditInput
                style={getInputStyle(editMode)}
                value={inputValue}
                onChange={(ev, value) => setInputValue(value)}
                className="filename-input"
                focus={editMode}
                placeholder={imageData.filename}
                onSubmit={() => {
                  setImageName(image.index, inputValue);
                  setEditMode(false);
                  onEditModeChange?.(false);
                }}
                onCancel={() => {
                  setEditMode(false);
                  onEditModeChange?.(false);
                }}
              />
              <span className="filename-value">{editMode ? '' : image.filename}</span>
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
          className="remove-button"
          colors={['white', '#ff4343']}
          name="delete"
          onClick={() => {
            setEditMode(false);
            setImageData(getDefaultImageData(''));
            onRemoval?.(image.index);
          }}
        />
      ) : (
        false
      )}
    </section>
  );
};

const ConnectedImageDetails = connect(null, {removeImage, setAppMode, setImageName})(ImageDetails);

export {ConnectedImageDetails as ImageDetails};
