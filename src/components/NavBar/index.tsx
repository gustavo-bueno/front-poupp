import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import { colors, metrics } from '../../styles';
import { AddButton } from './styles';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavBar: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case 'Home':
                return (
                  <Feather name="home" size={metrics.base * 7} color={color} />
                );
              case 'Chart':
                return (
                  <Feather
                    name="pie-chart"
                    size={metrics.base * 7}
                    color={color}
                  />
                );
              case 'User':
                return (
                  <Feather name="user" size={metrics.base * 7} color={color} />
                );
              case 'Movements':
                return (
                  <AntDesign
                    name="retweet"
                    size={metrics.base * 7}
                    color={color}
                  />
                );
              default:
                return;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.green,
          inactiveTintColor: '#fff',
          showLabel: false,
          style: {
            backgroundColor: colors.darkBlue,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Movements" component={HomeScreen} />
        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={() => ({
            tabBarIcon: () => (
              <AddButton>
                <FontAwesome name="plus" size={metrics.base * 4} color="#fff" />
              </AddButton>
            ),
          })}
        />
        <Tab.Screen name="Chart" component={HomeScreen} />
        <Tab.Screen name="User" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
