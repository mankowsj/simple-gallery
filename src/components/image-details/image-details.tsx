import React, {useEffect, useState} from 'react';
import './image-details.styles.pcss';
import {ActionButton} from '@components/action-button';
import {connect} from 'react-redux';
import {removeImage} from '@redux/actions';

type ImageDetails = {
  className?: string;
  image: ReduxImage;
  removeImage: typeof removeImage;
};

const getImageData = (image: ReduxImage) =>
  new Promise((resolve, reject) => {
    const imageObj = new Image();
    imageObj.onload = data => resolve(data.target);
    imageObj.onerror = reject;
    imageObj.src = image.filepath;
  }).catch(err => ({error: err}));

const getDefaultImageData = (): ImageObj => ({
  height: 'loading',
  filename: 'loading',
  width: 'loading',
  location: 'loading',
  extension: 'loading'
});

type ImageObj = {
  filename: string;
  width: string;
  height: string;
  location: string;
  extension: string;
};

const getTableRow = (desc: string, value: string, button?: JSX.Element | boolean) => (
  <tr>
    <td>{desc}</td>
    <td>{value}</td>
    <td>{button ?? false}</td>
  </tr>
);

const ImageDetails = ({className, image, removeImage}: ImageDetails) => {
  const [imageData, setImageData] = useState(getDefaultImageData());
  useEffect(() => {
    const imageData = getImageData(image).then((imageObj: any) =>
      setImageData({
        width: imageObj.width,
        height: imageObj.height,
        filename: image.filename,
        location: image.location,
        extension: image.extension
      })
    );
  }, [image]);
  const isImageOk = !isNaN(Number(imageData.width));

  return (
    <section className={`${className} image-details`}>
      <h3>Image data:</h3>
      <table cellPadding={6}>
        <tbody>
          {getTableRow(
            'Filename:',
            imageData.filename,
            isImageOk ? <ActionButton colors={['black', 'white']} name="edit" onClick={() => {}} /> : false
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
          onClick={() => removeImage(image.index)}
        />
      ) : (
        false
      )}
    </section>
  );
};
ImageDetails.defaultProps = {
  className: ''
};

const ConnectedImageDetails = connect(null, {removeImage})(ImageDetails);

export {ConnectedImageDetails as ImageDetails};
