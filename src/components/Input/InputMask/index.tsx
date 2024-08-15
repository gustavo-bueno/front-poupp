import { useField } from '@unform/core';
import React, { useState, useCallback, useRef, useEffect } from 'react';

import { H2 } from '../../Text';
import { IProps } from './IProps';

import { colors, metrics } from '../../../styles';
import { CustomMaskedInput } from './styles';

const InputMask = ({ type, style, name, ...rest }: IProps) => {
  const inputRef = useRef<any>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
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
      <CustomMaskedInput
        ref={inputRef}
        type={type}
        style={[
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.darkBlue
              : colors.gray,
            marginVertical: metrics.base * 2,
          },
          style,
        ]}
        value={inputValue}
        includeRawValueInChangeText
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
