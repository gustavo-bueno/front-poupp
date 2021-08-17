import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import PresentationScreen from '../screens/PresentationScreen';
import LoginScreen from '../screens/LoginScreen';
import SingUpScreen from '../screens/SignUpScreen';
import { colors } from '../styles';
import { ROUTES } from '../constants/routes';

const Authentication = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      >
        <Screen name={ROUTES.PRESENTATION} component={PresentationScreen} />
        <Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Screen name={ROUTES.SIGNUP} component={SingUpScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Authentication;
