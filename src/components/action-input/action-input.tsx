import React, {useState, useRef, useEffect} from 'react';
import './action-input.styles.pcss';

type ActionInputProps = {
  className?: string;
  label?: string;
  onSubmit?: (value: string) => void;
  onCancel?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  focus?: boolean;
  style?: React.CSSProperties;
};

const ActionInput = ({
  className,
  label,
  initialValue,
  placeholder,
  onCancel,
  onSubmit,
  focus,
  style
}: ActionInputProps) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    focus && inputRef.current?.focus();
  }, [inputRef, focus]);

  return (
    <div style={style} className={`${className} action-input`}>
      {label ? <label>{label}</label> : false}
      <input
        ref={inputRef}
        onChange={({currentTarget}) => setValue(currentTarget.value)}
        onKeyUp={({key}) => {
          if (key === 'Escape') {
            onCancel!(value!);
          } else if (key === 'Enter') {
            onSubmit!(value!);
          }
        }}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
ActionInput.defaultProps = {
  style: {},
  className: '',
  onSubmit: () => {},
  onCancel: () => {},
  placeholder: '',
  initialValue: ''
};

export {ActionInput};
