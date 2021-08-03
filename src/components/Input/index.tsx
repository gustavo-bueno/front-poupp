import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useField } from '@unform/core';
import { CustomInput } from './styles';
import { IProps } from './IProps';
import { colors, metrics } from '../../styles';
import { H2 } from '../Text';
import InputMask from './InputMask';
import Button from '../Button';
import Ripple from 'react-native-material-ripple';
// import { Container } from './styles';

const Input: React.FC<IProps> = ({
  name,
  style,
  mask,
  options,
  showPasswordButton,
  type = 'custom',
  ...rest
}: IProps) => {
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

  if (mask) {
    return (
      <InputMask
        name={name}
        options={options}
        style={[
          {
            borderColor: error
              ? colors.error
              : isFocused
              ? colors.primary
              : colors.grey,
            marginVertical: metrics.base * 2,
          },
          style,
        ]}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    );
  }

  if (showPasswordButton) {
    return (
      <>
        <View style={{ position: 'relative' }}>
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
          <Ripple onPress={() => setShowPassword((state) => !state)}></Ripple>
        </View>

        {error && <H2 color="red">{error}</H2>}
      </>
    );
  }

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

      {error && <H2 color="red">{error}</H2>}
    </>
  );
};

export default Input;
