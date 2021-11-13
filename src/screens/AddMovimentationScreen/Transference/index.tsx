import React, { useState } from 'react';
import { View } from 'react-native';
import CategoriesList from '../../../components/CategoriesList';
import CollapsibleList from '../../../components/CollapsibleList';
import { CenteredContainer } from '../../../components/Container';
import { H1 } from '../../../components/Text';
import {
  FrequencyButton,
  FrequencyContainer,
  SecondaryTitle,
  TextAreaInput,
  TransactionTypeContainer,
} from '../styles';

const paymentMethodData = [
  {
    name: 'Carteira',
  },
  {
    name: 'Conta itáu',
  },
];

const Transference: React.FC = () => {
  const [frequency, setFrequency] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <TransactionTypeContainer>
      <SecondaryTitle>Descrição:</SecondaryTitle>
      <TextAreaInput />
      <SecondaryTitle>Transferir de:</SecondaryTitle>
      <CollapsibleList
        onPressItem={(selectedPaymentMethod) =>
          setPaymentMethod(selectedPaymentMethod.name)
        }
        data={paymentMethodData}
        collapsibleTitle={paymentMethod}
      />
      <SecondaryTitle>Para:</SecondaryTitle>
      <CollapsibleList
        onPressItem={(selectedPaymentMethod) =>
          setPaymentMethod(selectedPaymentMethod.name)
        }
        data={paymentMethodData}
        collapsibleTitle={paymentMethod}
      />
      {/* <SecondaryTitle>Quantas parcelas mensais?</SecondaryTitle>
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
      </CenteredContainer> */}
    </TransactionTypeContainer>
  );
};

export default Transference;
