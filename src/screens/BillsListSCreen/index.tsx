import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import { BorderRadiusContainer } from '../../components/Container';
import InfoCardItem from '../../components/InfoCardItem';
import MoneyText from '../../components/MoneyText';
import ProgressResume from '../../components/ProgressResume';
import { H5 } from '../../components/Text';
import { ROUTES } from '../../constants/routes';
import { colors, metrics } from '../../styles';
import { BillsImage } from './styles';
import { createAnimatableComponent } from 'react-native-animatable';
import Button from '../../components/Button';
import { getAllBills } from '../../services/bills';
import useUserData from '../../hooks/useUserData';
import { IBill } from '../../models/bill';
import AddBillsModal from '../AddInitialBillsScreen/AddBillsModal';

const List = createAnimatableComponent(FlatList);

const BillsListScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<IBill[]>([]);
  const { user } = useUserData();

  useEffect(() => {
    const getUserBills = async () => {
      const bills = await getAllBills(user.token);
      setData(bills);
    };
    if (!openModal) {
      getUserBills();
    }
  }, [openModal]);

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

  return (
    <>
      <AddBillsModal
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      />
      <View
        style={{
          position: 'relative',
          flex: 1,
          height: '100%',
          backgroundColor: colors.green,
        }}
      >
        <BorderRadiusContainer
          style={{
            paddingTop: metrics.base * 7,
            paddingHorizontal: 16,
          }}
        >
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
          <Button
            style={{ bottom: 80 }}
            type="rounded"
            onPress={() => setOpenModal(true)}
          />
        </BorderRadiusContainer>
      </View>
    </>
  );
};

export default BillsListScreen;
