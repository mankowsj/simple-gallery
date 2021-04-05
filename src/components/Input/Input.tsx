import React, {useRef, useEffect, ReactNode} from 'react';
import './Input.styles.pcss';

export type InputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  focus?: boolean;
  style?: React.CSSProperties;
  value: string;
  onChange: (ev: React.ChangeEvent, value: string) => void;
  actions: ReactNode;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>, value: string) => void;
};

export const Input = ({
  className = '',
  label,
  value,
  placeholder = '',
  onChange,
  focus,
  style,
  actions,
  onKeyUp
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    focus && inputRef.current?.focus();
  }, [inputRef, focus]);

  return (
    <div style={style} className={`${className} action-input`}>
      {label && <label>{label}</label>}
      <input
        ref={inputRef}
        onChange={ev => onChange(ev, ev.currentTarget.value)}
        onKeyUp={ev => onKeyUp?.(ev, value)}
        placeholder={placeholder}
        value={value}
      />
      <div className="action-container">{actions}</div>
    </div>
  );
};
