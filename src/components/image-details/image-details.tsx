import React, {useEffect, useState} from 'react';
import './image-details.styles.pcss';
import {ActionButton} from '@components/action-button';

type ImageDetails = {
  className?: string;
  image: ReduxImage;
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

const ImageDetails = ({className, image}: ImageDetails) => {
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

  const getTableRow = (desc: string, value: string, button?: JSX.Element) => (
    <tr>
      <td>{desc}</td>
      <td>{value}</td>
      <td>{button ?? false}</td>
    </tr>
  );

  return (
    <section className={`${className} image-details`}>
      <h3>Image data:</h3>
      <table cellPadding={6}>
        <tbody>
          {getTableRow(
            'Filename:',
            imageData.filename,
            <ActionButton colors={['black', 'white']} name="edit" onClick={() => {}} />
          )}
          {getTableRow('Extension:', imageData.extension)}
          {getTableRow('Location:', imageData.location)}
          {getTableRow('Width:', imageData.width)}
          {getTableRow('Height:', imageData.height)}
        </tbody>
      </table>
      <ActionButton className="remove" colors={['white', '#ff4343']} name="delete" onClick={() => {}} />
    </section>
  );
};
ImageDetails.defaultProps = {
  className: ''
};
export {ImageDetails};
