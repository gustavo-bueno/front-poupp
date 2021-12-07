import React from 'react';
import Authentication from './authentication';
import useUserData from '../hooks/useUserData';
import Home from './home';
import InitialData from './initialData';
import SplashScreen from '../screens/SplashScreen';

const Routes: React.FC = () => {
  const { user, loading } = useUserData();

  if (loading) {
    return <SplashScreen />;
  }

  if (user.token && !user.user.hasInitialData) {
    return <InitialData />;
  }

  if (user.token && !loading) {
    return <Home />;
  }

  return <Authentication />;
};

export default Routes;
