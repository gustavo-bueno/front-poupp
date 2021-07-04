import React, { useState } from 'react';
import Ripple from 'react-native-material-ripple';
import { FlatList } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

import { H0, H2 } from '../../components/Text';
import {
  ConfirmButton,
  Container,
  CustomScrollView,
  InputContainer,
  MovimentationInfosContainer,
  OptionContainer,
  OptionsContainer,
  SecondaryTitle,
  TextAreaInput,
} from './styles';
import CategoriesList from '../../components/CategoriesList';
import { colors, metrics } from '../../styles';
import CollapsibleList from '../../components/CollapsibleList';

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

const frequencyData = [
  {
    name: 'Uma vez',
  },
  {
    name: 'Duas vezes',
  },
  {
    name: 'Três vezes',
  },
  {
    name: 'Infinito',
  },
];

const AddMovimentationScreen: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('0000');
  const [maskedValue, setMaskedValue] = useState<string | undefined>('000');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [movimentationType, setMovimentationType] = useState({
    id: '1',
    name: 'Entradas',
  });

  console.log(value);

  const time = Date.now();

  const MovimentationIcon = () => {
    if (movimentationType.id === '3') {
      return <AntDesign name="retweet" size={40} color="grey" />;
    }

    if (movimentationType.id === '2') {
      return <FontAwesome5 name="long-arrow-alt-down" size={40} color="red" />;
    }
    return <FontAwesome5 name="long-arrow-alt-up" size={40} color="green" />;
  };

  const renderItem = ({ item }: { item: { id: string; name: string } }) => {
    return (
      <Ripple
        style={{ marginLeft: metrics.base * 5 }}
        onPress={() => setMovimentationType(item)}
      >
        <OptionContainer active={movimentationType == item ? true : false}>
          <H2>{item.name}</H2>
        </OptionContainer>
      </Ripple>
    );
  };

  return (
    <Container>
      <CustomScrollView>
        <InputContainer>
          <MovimentationIcon />
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
              setPaymentMethod(selectedPaymentMethod)
            }
            data={paymentMethodData}
            collapsibleTitle="Forma de pagamento"
          />
          <SecondaryTitle>Acontece quantas vezes?</SecondaryTitle>
          <CollapsibleList
            data={frequencyData}
            collapsibleTitle="Frequência"
            onPressItem={(selectedFrequency) => setFrequency(selectedFrequency)}
          />
        </MovimentationInfosContainer>
      </CustomScrollView>
      <ConfirmButton>
        <Entypo
          name="check"
          size={metrics.base * 12}
          color="white"
          style={{
            shadowColor: 'black',
            elevation: 3,
          }}
        />
      </ConfirmButton>
    </Container>
  );
};

export default AddMovimentationScreen;
