import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import CardScreen from '../screens/CardScreen';
import { colors } from '../styles';
import { ROUTES } from '../constants/routes';
import NavBar from '../components/NavBar';
import AddMovimentationScreen from '../screens/AddMovimentationScreen';
import PouppTeachScreen from '../screens/PouppTeachScreen';

export default function Home() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      >
        <Screen name={ROUTES.HOME} component={NavBar} />
        <Screen
          name={ROUTES.ADD_TRANSACTION}
          component={AddMovimentationScreen}
        />
        <Screen name={ROUTES.CARD} component={CardScreen} />
        <Screen name={ROUTES.POUPP_TEACH} component={PouppTeachScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
