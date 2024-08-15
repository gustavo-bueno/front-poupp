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
import { TransactionProvider } from './src/contexts/transaction';
import FlashMessage from 'react-native-flash-message';

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
    <TransactionProvider>
      <UserProvider>
        <RegisterUserProvider>
          <Routes />
          <FlashMessage position="top" />
        </RegisterUserProvider>
      </UserProvider>
    </TransactionProvider>
  );
};

export default App;
