import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import { UserContext } from '../contexts/user';
import Authentication from './authentication';

const Routes: React.FC = () => {
  const { user } = useContext(UserContext);
  return user ? <NavBar /> : <Authentication />;
};

export default Routes;
