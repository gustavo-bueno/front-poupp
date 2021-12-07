import React from 'react';
import { View } from 'react-native';
import Poupp from '../../../assets/poupp.svg';
import { colors } from '../../styles';

// import { Container } from './styles';

const SplashScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Poupp width="50px" height="20px" />
    </View>
  );
};

export default SplashScreen;
