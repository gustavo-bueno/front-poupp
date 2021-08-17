import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CardDetailScreen from '../screens/CardDetailScreen';
import NavBar from '../components/NavBar';
import AddMovimentationScreen from '../screens/AddMovimentationScreen';
import PouppTeachScreen from '../screens/PouppTeachScreen';
import ExtraIncomeScreen from '../screens/ExtraIncomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import { ROUTES } from '../constants/routes';

import Header from '../components/Header';
import { colors } from '../styles';
import GoalsListScreen from '../screens/GoalsListScreen';
import GoalDetailScreen from '../screens/GoalDetailScreen';
import CardListScreen from '../screens/CardListScreen';

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
        <Screen name={ROUTES.CARD_DETAIL} component={CardDetailScreen} />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Meus" subtitle="cartões" {...props} />
            ),
          }}
          name={ROUTES.CARD_LIST}
          component={CardListScreen}
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
              <Header title="Bora de" subtitle="renda extra?" {...props} />
            ),
          }}
          name={ROUTES.EXTRA_INCOME}
          component={ExtraIncomeScreen}
        />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Minhas" subtitle="metas" {...props} />
            ),
          }}
          name={ROUTES.GOALS_LIST}
          component={GoalsListScreen}
        />
        <Screen
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Detalhes da" subtitle="meta" {...props} />
            ),
          }}
          name={ROUTES.GOAL_DETAIL}
          component={GoalDetailScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}
