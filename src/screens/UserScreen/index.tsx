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
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

const UserScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
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
        <Username>Wilian</Username>
      </HeaderContainer>
      <MainContent>
        <ButtonsContainer>
          <Button theme={{ type: 'top' }}>
            <ButtonText>Meus dados</ButtonText>
          </Button>
          <Button theme={{ type: 'normal' }}>
            <ButtonText>Configurações</ButtonText>
          </Button>
          <Button
            onPress={() => navigate(ROUTES.POUPP_TEACH)}
            theme={{ type: 'normal' }}
          >
            <ButtonText>Poupp Educa</ButtonText>
          </Button>
          <Button
            onPress={() => navigate(ROUTES.EXTRA_INCOME)}
            theme={{ type: 'normal' }}
          >
            <ButtonText>Renda extra</ButtonText>
          </Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button onPress={() => setUser(false)} theme={{ type: 'bottom' }}>
            <ButtonText>Sair</ButtonText>
          </Button>
        </ButtonsContainer>
      </MainContent>
    </UserContainer>
  );
};

export default UserScreen;
