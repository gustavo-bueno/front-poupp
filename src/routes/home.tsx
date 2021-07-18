import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import CardScreen from '../screens/CardScreen';
import { colors, metrics } from '../styles';
import { ROUTES } from '../constants/routes';
import NavBar from '../components/NavBar';
import AddMovimentationScreen from '../screens/AddMovimentationScreen';
import PouppTeachScreen from '../screens/PouppTeachScreen';
import ExtraIncomeScreen from '../screens/ExtraIncomeScreen';

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
        <Screen
          options={
            {
              // headerShown: true,
              // title: '',67y
              // headerStyle: {
              //   height: metrics.hp(7),
              //   backgroundColor: colors.green,
              // },
              // headerTransparent: true,
            }
          }
          name={ROUTES.CARD}
          component={CardScreen}
        />
        <Screen name={ROUTES.POUPP_TEACH} component={PouppTeachScreen} />
        <Screen name={ROUTES.EXTRA_INCOME} component={ExtraIncomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
