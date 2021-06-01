import React, { useEffect, useRef, useState } from 'react';
import { ColorValue, TextInput } from 'react-native';
import { useField } from '@unform/core';
import { CustomInput } from './styles';
import { IProps } from './IProps';
import { colors, metrics } from '../../styles';
import { H2 } from '../Text';
// import { Container } from './styles';

const Input: React.FC<IProps> = ({ name, style, ...rest }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<any>(TextInput);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <CustomInput
        ref={inputRef}
        placeholderTextColor={colors.grey}
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
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        defaultValue={defaultValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit={true}
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

export default Input;
