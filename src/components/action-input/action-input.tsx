import React, {useRef, useEffect} from 'react';
import './action-input.styles.pcss';
import {ActionButton} from '@components/action-button';
import {redButtonBackground} from '../../utils';

type ActionInputProps = {
  className?: string;
  label?: string;
  onSubmit?: (value: string) => void;
  onCancel?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  focus?: boolean;
  style?: React.CSSProperties;
  value: string;
  onChange: (ev: React.ChangeEvent, value: string) => void;
};

const ActionInput = ({
  className,
  label,
  value,
  placeholder,
  onCancel,
  onSubmit,
  onChange,
  focus,
  style
}: ActionInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const showCancelButton = Boolean(onCancel);
  useEffect(() => {
    focus && inputRef.current?.focus();
  }, [inputRef, focus]);

  return (
    <div style={style} className={`${className} action-input`}>
      {label ? <label>{label}</label> : false}
      <input
        ref={inputRef}
        onChange={ev => onChange(ev, ev.currentTarget.value)}
        onKeyUp={ev => {
          const {key} = ev;
          ev.stopPropagation();
          ev.preventDefault();
          if (key === 'Escape') {
            onCancel && onCancel(value!);
          } else if (key === 'Enter') {
            onSubmit!(value!);
          }
        }}
        placeholder={placeholder}
        value={value}
      />
      {showCancelButton ? (
        <ActionButton
          onClick={() => onCancel!(value!)}
          name="close"
          className="cancel-button"
          colors={['white', redButtonBackground]}
        />
      ) : (
        false
      )}
    </div>
  );
};
ActionInput.defaultProps = {
  style: {},
  className: '',
  onSubmit: () => {},
  placeholder: '',
  initialValue: ''
};

export {ActionInput};
