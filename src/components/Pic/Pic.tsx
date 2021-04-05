import React, {useState} from 'react';

const ALT_IMAGE_FILEPATH = 'src/assets/no-image.jpg';

type PicState = 'loading' | 'ready' | 'error';
type PicProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
  onLoad?: () => void;
  onMouseOver?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
};

export const Pic = ({src, className, style, onLoad, ...rest}: PicProps) => {
  const [state, setState] = useState<PicState>('loading');

  return (
    <React.Fragment>
      <img
        style={{minHeight: '100px', ...style}}
        className={className}
        src={state === 'error' ? ALT_IMAGE_FILEPATH : src}
        {...rest}
        onLoad={() => {
          setState('ready');
          onLoad?.();
        }}
        onError={() => setState('error')}
      />
      {state === 'loading' ? <span className="preloader" /> : false}
    </React.Fragment>
  );
};
