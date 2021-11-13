import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import { Entypo } from '@expo/vector-icons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

import { H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import Button from '../../components/Button';
import {
  Container,
  CustomScrollView,
  InputContainer,
  MovimentationInfosContainer,
} from './styles';
import TopTabs from './TopTabs';
import Income from './Income';
import Outcome from './Outcome';
import Transference from './Transference';

const options = [
  {
    id: '1',
    name: 'Entradas',
  },
  {
    id: '2',
    name: 'Saídas',
  },
  {
    id: '3',
    name: 'Transferências',
  },
];

const Tab = createMaterialTopTabNavigator();

const AddMovimentationScreen: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('0000');
  const [maskedValue, setMaskedValue] = useState<string | undefined>('000');

  return (
    <Container>
      {/* <CustomScrollView> */}
      <InputContainer>
        <TextInputMask
          type="money"
          keyboardType="numeric"
          value={maskedValue}
          style={{
            fontSize: 40,
            fontFamily: 'Ubuntu_700Bold',
            color: colors.white,
            backgroundColor: colors.green,
            width: '85%',
            flexWrap: 'wrap',
            textAlign: 'right',
          }}
          includeRawValueInChangeText
          onChangeText={(text, rawValue) => {
            setValue(rawValue);
            setMaskedValue(text);
          }}
        />
      </InputContainer>
      <MovimentationInfosContainer>
        <H2 fontWeight="medium" style={{ textAlign: 'center' }}>
          Qual o tipo de transação?
        </H2>

        <Tab.Navigator
          content
          style={{ flex: 1 }}
          tabBar={(props: MaterialTopTabBarProps) => <TopTabs {...props} />}
        >
          <Tab.Screen name="Entradas" component={Income} />
          <Tab.Screen name="Saídas" component={Outcome} />
          <Tab.Screen name="Transferências" component={Transference} />
        </Tab.Navigator>
      </MovimentationInfosContainer>
      {/* </CustomScrollView> */}
      <Button type="rounded">
        <Entypo name="check" size={metrics.base * 12} color="white" />
      </Button>
    </Container>
  );
};

export default AddMovimentationScreen;
