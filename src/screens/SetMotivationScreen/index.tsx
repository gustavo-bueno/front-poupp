import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import { H3 } from '../../components/Text';
import { ROUTES } from '../../constants/routes';
import { metrics } from '../../styles';
import { OptionText, OptionContainer } from './styles';

const SetMotivationScreen: React.FC = () => {
  const [navigateRoute, setNavigateRoute] = useState(ROUTES.ADD_CARD);
  const { navigate } = useNavigation();

  return (
    <BorderRadiusContainer
      style={{ justifyContent: 'space-between', position: 'relative' }}
    >
      <View>
        <H3>
          Para continuarmos, fala pra gente aí, qual seu objetivo com o app? 😄
        </H3>
        <OptionContainer
          onPress={() => setNavigateRoute(ROUTES.ADD_INCOME)}
          isSelected={navigateRoute === ROUTES.ADD_INCOME}
        >
          <OptionText fontWeight="medium">
            Gerenciar e poupar dinheiro
          </OptionText>
          <Image source={require('../../images/wallet.png')} />
        </OptionContainer>
        <OptionContainer
          onPress={() => setNavigateRoute(ROUTES.INITIAL_BILLS)}
          isSelected={navigateRoute === ROUTES.INITIAL_BILLS}
        >
          <OptionText fontWeight="medium">
            Pagar dívidas e começar a me organizar!
          </OptionText>
          <Image source={require('../../images/credit-card.png')} />
        </OptionContainer>
      </View>
      <Button
        style={{
          position: 'absolute',
          bottom: metrics.hp(11),
          left: metrics.wp(5),
        }}
        title="Pronto!"
        onPress={() => navigate(navigateRoute)}
      />
    </BorderRadiusContainer>
  );
};

export default SetMotivationScreen;
