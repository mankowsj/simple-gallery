import React, {useState} from 'react';
import {ThemeValues} from '@redux/types';
import './switch.styles.pcss';

type LabelObj = {label: string; value: string};

type SwitchBaseProps = {
  className?: string;
  onChange: (value: string) => void;
  initialValue?: string;
};
type SwitchSimpleProps = {
  labels: Array<string>;
};
type SwitchExtendedProps = {
  labels: Array<LabelObj>;
};

type SwitchProps = SwitchBaseProps & (SwitchSimpleProps | SwitchExtendedProps);

const fixSimpleList = (list: any[]) => {
  if (typeof list[0] === 'string') {
    return list.map((label, index) => ({label, value: index}));
  }
  return list;
};

const Switch = ({labels, onChange, className, initialValue}: SwitchProps) => {
  const [selectedIndex, setSelectedIndex] = useState(initialValue || '0');

  const fixedLabels = fixSimpleList(labels);

  return (
    <div className={`${className} switch`}>
      {fixedLabels.map<any>(({label, value}: LabelObj, index: number) => (
        <span
          key={value}
          onClick={() => {
            setSelectedIndex(String(index));
            onChange(value);
          }}
          className={`switch-button ${String(index) === selectedIndex ? 'on' : ''}`}>
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
