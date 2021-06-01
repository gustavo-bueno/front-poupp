import React from 'react';
import NavBar from './src/components/NavBar';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading'

const App: React.FC  = () => {

  const [ fontsLoaded ] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <NavBar />
  )

}

export default App

