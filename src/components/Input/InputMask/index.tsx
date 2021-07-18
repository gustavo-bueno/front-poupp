import { useField } from '@unform/core';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import { metrics } from '../../../styles';
import { H2 } from '../../Text';
import { IProps } from './IProps';

const InputMask = ({ type, style, name, ...rest }: IProps) => {
  const inputRef = useRef<any>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [rawValue, setRawValue] = useState<string | number>('');
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const getValue: string | any = () => {
    if (rawValue) return rawValue;
    if (inputRef.current) return inputRef.current?.getElement().value;
    return '';
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue,
      setValue(ref, value) {
        if (!value) {
          ref.getElement().setNativeProps({ text: '' });
          setInputValue('');
        } else if (ref) {
          inputRef.current?.getElement().setNativeProps({ text: value });
          setRawValue(String(value));
          setInputValue(String(value));
        }
      },
    });
  }, [fieldName, rawValue, registerField]);

  const onChangeText = useCallback((maskedValue, unmaskedValue) => {
    if (inputRef.current) {
      setRawValue(unmaskedValue);
      setInputValue(maskedValue);
    }
  }, []);

  return (
    <>
      <TextInputMask
        ref={inputRef}
        type={type}
        style={style}
        value={inputValue}
        includeRawValueInChangeText
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        {...rest}
      />
      {error && (
        <H2 color="red" style={{ marginBottom: metrics.base }}>
          {error}
        </H2>
      )}
    </>
  );
};
export default InputMask;