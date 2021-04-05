import React, {KeyboardEvent} from 'react';
import {Input, InputProps} from './Input';
import {ActionButton} from '../ActionButton';
import {RED_BUTTON_BACKGROUND} from '../../utils';

export type EditInputProps = Omit<InputProps, 'actions' | 'onKeyUp'> & {
  onCancel?: () => void;
  onSubmit?: () => void;
};

export const EditInput = ({onSubmit, onCancel, ...rest}: EditInputProps) => {
  const onKeyUp = (ev: KeyboardEvent<HTMLInputElement>) => {
    const {key} = ev;
    ev.stopPropagation();
    ev.preventDefault();

    if (key === 'Escape') {
      onCancel?.();
    } else if (key === 'Enter') {
      onSubmit?.();
    }
  };

  return (
    <Input
      {...rest}
      onKeyUp={onKeyUp}
      actions={
        <ActionButton
          onClick={() => onCancel?.()}
          name="close"
          className="cancel-button"
          colors={['white', RED_BUTTON_BACKGROUND]}
        />
      }
    />
  );
};
