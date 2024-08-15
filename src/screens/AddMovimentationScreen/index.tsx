import React, { useState, useContext } from 'react';
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
import { TransactionContext } from '../../contexts/transaction';
import useUserData from '../../hooks/useUserData';
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../constants/routes';
import { TextInput } from 'react-native-gesture-handler';
import { CustomInput } from '../../components/Input/styles';
import { KeyboardAvoidingView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AddMovimentationScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [maskedValue, setMaskedValue] = useState<string | undefined>('000');
  const { refreshData, user } = useUserData();
  const { addTransaction, setTransaction } = useContext(TransactionContext);

  return (
    <Container>
      <>
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
              setTransaction((currentTransaction) => ({
                ...currentTransaction,
                value: Number(rawValue) ?? 0,
              }));
              setMaskedValue(text);
            }}
          />
        </InputContainer>
        <MovimentationInfosContainer>
          <CustomInput
            style={{ marginBottom: metrics.base * 2 }}
            placeholder="Título da transação"
            onChangeText={(text: string) =>
              setTransaction((currentTransaction) => ({
                ...currentTransaction,
                title: text,
              }))
            }
          />
          <H2 fontWeight="medium" style={{ textAlign: 'center' }}>
            Qual o tipo de transação?
          </H2>

          <Tab.Navigator
            content
            style={{ flex: 1 }}
            tabBar={(props: MaterialTopTabBarProps) => <TopTabs {...props} />}
          >
            <Tab.Screen
              listeners={() => ({
                focus: () => setTransaction({ type: 'income' }),
              })}
              name="Entradas"
              component={Income}
            />
            <Tab.Screen
              listeners={() => ({
                focus: () => setTransaction({ type: 'outcome' }),
              })}
              name="Saídas"
              component={Outcome}
            />
            <Tab.Screen
              listeners={() => ({
                focus: () => setTransaction({ type: 'transfer' }),
              })}
              name="Transferências"
              component={Transference}
            />
          </Tab.Navigator>
        </MovimentationInfosContainer>
      </>
      <Button
        onPress={async () => {
          const success = await addTransaction(user.token);
          if (success) {
            refreshData();
            navigate(ROUTES.TRANSACTIONS);
          }
        }}
        type="rounded"
      >
        <Entypo name="check" size={metrics.base * 12} color="white" />
      </Button>
    </Container>
  );
};

export default AddMovimentationScreen;
