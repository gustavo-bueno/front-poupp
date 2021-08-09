import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CardScreen from '../screens/CardScreen';
import NavBar from '../components/NavBar';
import AddMovimentationScreen from '../screens/AddMovimentationScreen';
import PouppTeachScreen from '../screens/PouppTeachScreen';
import ExtraIncomeScreen from '../screens/ExtraIncomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import { ROUTES } from '../constants/routes';

import Header from '../components/Header';
import { colors } from '../styles';

const { Navigator, Screen } = createStackNavigator();

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
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Poupp" subtitle="educa" {...props} />
            ),
          }}
          name={ROUTES.POUPP_TEACH}
          component={PouppTeachScreen}
        />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Poupp" subtitle="educa" {...props} />
            ),
          }}
          name={ROUTES.POST_DETAIL}
          component={PostDetailScreen}
        />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Bora de" subtitle="renda extra" {...props} />
            ),
          }}
          name={ROUTES.EXTRA_INCOME}
          component={ExtraIncomeScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}
