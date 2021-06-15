import React, { useState } from 'react';
import Ripple from 'react-native-material-ripple';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';

import { FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

import { H0, H2 } from '../../components/Text';
import {
  ConfirmButton,
  CustomScrollView,
  InputContainer,
  MovimentationInfosContainer,
  OptionContainer,
  OptionsContainer,
  ProvisoryCollapsible,
  SecondaryTitle,
  TextAreaInput,
} from './styles';
import CategoriesList from '../../components/CategoriesList';
import { colors, metrics } from '../../styles';

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

const AddMovimentationScreen: React.FC = () => {
  const [movimentationType, setMovimentationType] = useState({
    id: '1',
    name: 'Entradas',
  });

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
    <SafeAreaView
      style={{ height: '100%', width: '100%', position: 'relative' }}
    >
      <CustomScrollView>
        <InputContainer>
          <MovimentationIcon />
          <H0 color="white" fontWeight="bold" style={{ fontSize: 40 }}>
            R$0,00
          </H0>
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
          <ProvisoryCollapsible>
            <H2>Carteira</H2>
            <Entypo name="chevron-down" size={24} color="grey" />
          </ProvisoryCollapsible>
          <SecondaryTitle>Acontece quantas vezes?</SecondaryTitle>
          <ProvisoryCollapsible>
            <H2>Uma vez</H2>
            <Entypo name="chevron-down" size={24} color="grey" />
          </ProvisoryCollapsible>
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
    </SafeAreaView>
  );
};

export default AddMovimentationScreen;
