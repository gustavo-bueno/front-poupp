import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { TextInputMask } from 'react-native-masked-text';

import { FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

import { H1, H2 } from '../../components/Text';
import CategoriesList from '../../components/CategoriesList';
import { colors, metrics } from '../../styles';
import CollapsibleList from '../../components/CollapsibleList';
import Button from '../../components/Button';
import {
  FrequencyButton,
  FrequencyContainer,
  Container,
  CustomScrollView,
  InputContainer,
  MovimentationInfosContainer,
  OptionContainer,
  OptionsContainer,
  SecondaryTitle,
  TextAreaInput,
} from './styles';
import { CenteredContainer } from '../../components/Container';

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

const paymentMethodData = [
  {
    name: 'Carteira',
  },
  {
    name: 'Conta itáu',
  },
];

const AddMovimentationScreen: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('0000');
  const [maskedValue, setMaskedValue] = useState<string | undefined>('000');
  const [paymentMethod, setPaymentMethod] = useState<string>(
    paymentMethodData[0].name
  );
  const [frequency, setFrequency] = useState<number>(1);
  const [movimentationType, setMovimentationType] = useState({
    id: '1',
    name: 'Entradas',
  });

  const renderItem = ({ item }: { item: { id: string; name: string } }) => {
    return (
      <Ripple
        style={{ marginLeft: metrics.base * 5 }}
        onPress={() => setMovimentationType(item)}
      >
        <OptionContainer
          active={movimentationType.id == item.id ? true : false}
        >
          <H2>{item.name}</H2>
        </OptionContainer>
      </Ripple>
    );
  };

  return (
    <Container>
      <CustomScrollView>
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
          <OptionsContainer>
            <FlatList
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              horizontal
              renderItem={renderItem}
              data={options}
              keyExtractor={(item) => item.id}
            />
          </OptionsContainer>
          <SecondaryTitle>Selecione uma categoria:</SecondaryTitle>
          <CategoriesList />
          <SecondaryTitle>Descrição:</SecondaryTitle>
          <TextAreaInput />
          <SecondaryTitle>Pagar com:</SecondaryTitle>
          <CollapsibleList
            onPressItem={(selectedPaymentMethod) =>
              setPaymentMethod(selectedPaymentMethod.name)
            }
            data={paymentMethodData}
            collapsibleTitle={paymentMethod}
          />
          <SecondaryTitle>Quantas parcelas mensais?</SecondaryTitle>
          <CenteredContainer style={{ flexDirection: 'row' }}>
            <FrequencyButton
              onPress={() =>
                setFrequency((currentFrequency) => currentFrequency + 1)
              }
            >
              <H1 fontWeight="bold">+</H1>
            </FrequencyButton>
            <FrequencyContainer>
              <H1 fontWeight="bold">{frequency}</H1>
            </FrequencyContainer>
            <FrequencyButton
              disabled={frequency === 1}
              onPress={() =>
                setFrequency((currentFrequency) => currentFrequency - 1)
              }
            >
              <H1 fontWeight="bold">-</H1>
            </FrequencyButton>
          </CenteredContainer>
        </MovimentationInfosContainer>
      </CustomScrollView>
      <Button type="rounded">
        <Entypo name="check" size={metrics.base * 12} color="white" />
      </Button>
    </Container>
  );
};

export default AddMovimentationScreen;
