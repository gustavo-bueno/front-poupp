import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { colors } from '../styles';
import { ROUTES } from '../constants/routes';
import SetIncomeScreen from '../screens/SetIncomeScreen';
import Header from '../components/Header';
import SetMotivationScreen from '../screens/SetMotivationScreen';
import AddInitialBillsScreen from '../screens/AddInitialBillsScreen';

const InitialData = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.green },
        }}
      >
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header
                backButton={false}
                title="Olá! Seja bem vindo (a) ao poupp!
              "
                {...props}
              />
            ),
          }}
          name={ROUTES.ADD_INCOME}
          component={SetIncomeScreen}
        />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header
                backButton={false}
                title="Fechou! Show de bola.
              "
                {...props}
              />
            ),
          }}
          name={ROUTES.SET_MOTIVATION}
          component={SetMotivationScreen}
        />
        <Screen
          options={{
            cardStyle: {
              backgroundColor: colors.green,
            },
            headerShown: true,
            header: (props) => (
              <Header
                backButton={false}
                title="Opa, bora nos organizar!"
                {...props}
              />
            ),
          }}
          name={ROUTES.INITIAL_BILLS}
          component={AddInitialBillsScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default InitialData;
