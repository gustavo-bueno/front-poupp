import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import HomePage from './screens/HomeScreen';
import PresentationScreen from './screens/PresentationScreen';
import LoginScreen from './screens/LoginScreen';
import SingUpScreen from './screens/SignUpScreen'
import { colors } from './styles';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      >
        <Screen name="Home" component={HomePage} />
        <Screen name="Presentation" component={PresentationScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="SingUp" component={SingUpScreen} />
      </Navigator>
    </NavigationContainer>
  );
}