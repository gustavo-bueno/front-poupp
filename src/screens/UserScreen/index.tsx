import React from 'react';
import {
  UserContainer,
  HeaderContainer,
  UserBackground,
  Username,
  MainContent,
  Button,
  ButtonsContainer,
  ButtonText,
} from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { colors, metrics } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import useUserData from '../../hooks/useUserData';

const UserScreen: React.FC = () => {
  const { logout, user } = useUserData();
  const { navigate } = useNavigation();
  return (
    <UserContainer>
      <HeaderContainer>
        <UserBackground>
          <FontAwesome
            name="user"
            size={metrics.base * 20}
            color={colors.gray}
          />
        </UserBackground>
        <Username>{user.user.name}</Username>
      </HeaderContainer>
      <MainContent>
        <ButtonsContainer>
          <Button
            onPress={() => navigate(ROUTES.POUPP_TEACH)}
            theme={{ type: 'top' }}
          >
            <ButtonText>Poupp Educa</ButtonText>
          </Button>
          <Button
            onPress={() => navigate(ROUTES.EXTRA_INCOME)}
            theme={{ type: 'normal' }}
          >
            <ButtonText>Renda extra</ButtonText>
          </Button>
          <Button
            onPress={() => navigate(ROUTES.BILLS_LIST)}
            theme={{ type: 'normal' }}
          >
            <ButtonText>Minhas dívidas</ButtonText>
          </Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button onPress={logout} theme={{ type: 'bottom' }}>
            <ButtonText>Sair</ButtonText>
          </Button>
        </ButtonsContainer>
      </MainContent>
    </UserContainer>
  );
};

export default UserScreen;
