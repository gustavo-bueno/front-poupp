import React from 'react';
import { View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { H2 } from '../Text';

const EmptyMessage: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <H2>Opa, parece que você ainda não tem nada por aqui!</H2>
      <Entypo name="emoji-sad" size={24} color="black" />
    </View>
  );
};

export default EmptyMessage;
