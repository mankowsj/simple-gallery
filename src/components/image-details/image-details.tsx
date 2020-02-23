import React, {useEffect, useState} from 'react';
import './image-details.styles.pcss';

type ImageDetails = {
  className?: string;
  image: ReduxImage;
};

const getImageData = (image: ReduxImage) =>
  new Promise((resolve, reject) => {
    const imageObj = new Image();
    imageObj.onload = data => resolve(data.target);
    imageObj.onerror = reject;
    imageObj.src = image.path;
  }).catch(err => ({error: err}));

const getDefaultImageData = (): ImageObj => ({
  height: 'loading',
  filename: 'loading',
  width: 'loading',
  path: 'loading'
});

type ImageObj = {
  filename: string;
  width: string;
  height: string;
  path: string;
};

const ImageDetails = ({className, image}: ImageDetails) => {
  const [imageData, setImageData] = useState(getDefaultImageData());
  useEffect(() => {
    const imageData = getImageData(image).then((imageObj: any) =>
      setImageData({
        width: imageObj.width,
        height: imageObj.height,
        filename: image.name,
        path: image.path
      })
    );
  }, [image]);

  return (
    <section className={`${className} image-details`}>
      <h3>Image data:</h3>
      <ul>
        <li>Filename: {imageData.filename}</li>
        <li>Location: {imageData.path}</li>
        <li>Width: {imageData.width}</li>
        <li>Height: {imageData.height}</li>
      </ul>
    </section>
  );
};
ImageDetails.defaultProps = {
  className: ''
};
export {ImageDetails};
