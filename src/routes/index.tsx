import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import Authentication from './authentication';
import Home from './home';

const Routes: React.FC = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Home />;
  }
  return <Authentication />;
};

export default Routes;
