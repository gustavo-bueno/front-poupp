import React from 'react';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import { UserProvider } from './src/contexts/user';
import { RegisterUserProvider } from './src/contexts/registerUser';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UserProvider>
      <RegisterUserProvider>
        <Routes />
      </RegisterUserProvider>
    </UserProvider>
  );
};

export default App;
