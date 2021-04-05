import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import './Gallery.styles.pcss';
import {GridImage} from '../../components/GridImage';
import {setAppMode, setSelectedImage} from '../../redux/actions';
import {StoreType} from '@redux';

type GalleryProps = {
  className?: string;
  style?: React.CSSProperties;
  setAppMode: typeof setAppMode;
  appMode: StoreType['appModeReducer'];
  selectedIndex: number;
  setSelectedImage: typeof setSelectedImage;
  imageList: ReduxImage[];
};

const scrollToGridItem = (parent: HTMLElement, id: number) => {
  const element = parent.querySelector(`[data-id="${id}"]`);
  if (element) {
    if (element.scrollIntoViewIfNeeded) {
      element.scrollIntoViewIfNeeded();
    } else {
      element?.scrollIntoView({block: 'center'});
    }
  }
};

const Gallery = ({
  className = '',
  setAppMode,
  imageList,
  setSelectedImage,
  style,
  appMode,
  selectedIndex
}: GalleryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (appMode === 'BIG_PIC_CLOSING' && ref.current) {
      scrollToGridItem(ref.current, selectedIndex);
    }
  }, [appMode, ref, selectedIndex]);

  return (
    <main ref={ref} style={style} className={`${className} gallery`}>
      {imageList.map(({filepath, filename, index}) => (
        <GridImage
          onClick={() => {
            setSelectedImage(index);
            setAppMode('BIG_PIC_OPENING');
          }}
          dataId={String(index)}
          key={index}
          className="grid-item vertical-fix"
          imageName={filename}
          imageSrc={filepath}
        />
      ))}
    </main>
  );
};

const ConnectedGallery = connect(
  ({imageReducer, appModeReducer}: StoreType) => ({
    imageList: imageReducer.imageList,
    selectedIndex: imageReducer.selectedIndex,
    appMode: appModeReducer
  }),
  {
    setAppMode,
    setSelectedImage
  }
)(Gallery);

export {ConnectedGallery as Gallery};
