import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

import { Feather } from '@expo/vector-icons';

import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import MoneyText from '../../components/MoneyText';
import ProgressResume from '../../components/ProgressResume';
import { H3, H5 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import { BillsImage } from '../BillsListSCreen/styles';
import Ripple from 'react-native-material-ripple';
import InfoCardItem from '../../components/InfoCardItem';
import { ROUTES } from '../../constants/routes';
import AddBillsModal from './AddBillsModal';
import { IBill } from '../../models/bill';
import { getAllBills } from '../../services/bills';
import useUserData from '../../hooks/useUserData';

const List = createAnimatableComponent(FlatList);

const AddInitialBillsScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<IBill[]>([]);

  const renderItem = ({ item }: { item: IBill }) => {
    const percentage = item.paidValue / item.remainingValue;
    return (
      <Ripple
        style={{ marginTop: metrics.base * 2 }}
        rippleContainerBorderRadius={metrics.borderRadius}
      >
        <InfoCardItem
          title={item.title}
          value={item.remainingValue}
          bottomInfo={
            <ProgressResume
              progress={percentage}
              leftContent={
                <H5 color="text">
                  <MoneyText fontSize="h5" value={item.paidValue} />
                  {' arrecadado'}
                </H5>
              }
              rightContent={<H5 color="text">{percentage * 100}% concluído</H5>}
            />
          }
          image={
            <BillsImage>
              <Feather name="percent" size={48} color={colors.white} />
            </BillsImage>
          }
        />
      </Ripple>
    );
  };

  useEffect(() => {
    const getUserBills = async () => {
      const bills = await getAllBills(user.token);
      setData(bills);
    };
    if (!openModal) {
      getUserBills();
    }
  }, [openModal]);

  return (
    <>
      <AddBillsModal
        onRequestClose={() => setOpenModal(false)}
        visible={openModal}
      />
      <BorderRadiusContainer style={{ justifyContent: 'space-between' }}>
        <View>
          <H3>
            Você tem dívidas? Sem problemas, vamos juntos resolver isso! 💪
          </H3>
          <List
            useNativeDriver
            animation="bounceInDown"
            contentInsetAdjustmentBehavior="automatic"
            duration={1000}
            renderItem={renderItem as any}
            keyExtractor={(_, idx) => idx.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: metrics.base * 4 }} />
            )}
            data={data}
          />
        </View>
        <View style={{ marginBottom: 44 }}>
          <Button
            type="outline"
            title="Adicionar dívida"
            onPress={() => setOpenModal(true)}
            style={{
              backgroundColor: colors.background,
              marginBottom: metrics.base * 2,
            }}
          />
          <Button
            title="Pronto!"
            onPress={() => navigate(ROUTES.SET_EXPENSE)}
          />
        </View>
      </BorderRadiusContainer>
    </>
  );
};

export default AddInitialBillsScreen;
