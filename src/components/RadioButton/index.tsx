import React from 'react';
import Ripple from 'react-native-material-ripple';

import { Ionicons } from '@expo/vector-icons';
import { colors, metrics } from '../../styles';
import { StyleProp, ViewStyle } from 'react-native';
import { RadioContainer } from './styles';
import { H3 } from '../Text';

interface RadioButtonProps {
  onPress: () => void;
  active: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  onPress,
  active,
  title,
  style,
}) => {
  return (
    <RadioContainer>
      <Ripple
        style={style as any}
        onPress={onPress}
        rippleContainerBorderRadius={12}
      >
        {active ? (
          <Ionicons name="radio-button-on" size={24} color={colors.green} />
        ) : (
          <Ionicons name="radio-button-off" size={24} color={colors.green} />
        )}
      </Ripple>
      <H3 style={{ marginLeft: metrics.base * 2 }} fontWeight="medium">
        {title}
      </H3>
    </RadioContainer>
  );
};

export default RadioButton;
