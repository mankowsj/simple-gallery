import React, {useState} from 'react';
import './switch.styles.pcss';

type LabelObj = {label: string; value: string};

type SwitchBaseProps = {
  className?: string;
  onChange: (value: string) => void;
  initialValue?: string;
};
type SwitchSimpleProps = {
  labels: string[];
};
type SwitchExtendedProps = {
  labels: LabelObj[];
};

type SwitchProps = SwitchBaseProps & (SwitchSimpleProps | SwitchExtendedProps);

const fixSimpleList = (list: SwitchProps['labels']): LabelObj[] => {
  if (typeof list[0] === 'string') {
    return (list as string[]).map((label: string, index: number) => ({label, value: String(index)}));
  }
  return list as LabelObj[];
};

const Switch = ({labels, onChange, className, initialValue}: SwitchProps) => {
  const [selectedIndex, setSelectedIndex] = useState(initialValue || '0');

  const fixedLabels = fixSimpleList(labels);

  return (
    <div className={`${className} switch`}>
      {fixedLabels.map(({label, value}: LabelObj, index: number) => (
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
