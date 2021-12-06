import React from 'react';
import Authentication from './authentication';
import useUserData from '../hooks/useUserData';
import Home from './home';
import InitialData from './initialData';

const Routes: React.FC = () => {
  const { user } = useUserData();

  if (user.token && !user.user.hasInitialData) {
    return <InitialData />;
  }

  if (user.token) {
    return <Home />;
  }

  return <Authentication />;
};

export default Routes;
