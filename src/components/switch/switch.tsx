import React, {useState} from 'react';
import './switch.styles.pcss';

type SwitchProps = {
  className?: string;
  labels: [string, string];
  onChange: (value: number) => void;
};
const Switch = ({labels, onChange, className}: SwitchProps) => {
  const [value, setValue] = useState(0);

  return (
    <div className={`${className} switch`}>
      {labels.map((label, index) => (
        <span
          key={label}
          onClick={() => {
            setValue(index);
            onChange(index);
          }}
          className={`switch-button ${index === value ? 'on' : ''}`}>
          <label>{label}</label>
        </span>
      ))}
    </div>
  );
};

Switch.defaultProps = {
  className: '',
  onChange: () => {}
};

export {Switch};
