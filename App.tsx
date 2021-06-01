import React from 'react';
import PresentationScreen from './src/screens/PresentationScreen';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu';
import { View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return <LoginScreen />;
}
