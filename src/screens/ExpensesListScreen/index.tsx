import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import * as Animatable from 'react-native-animatable';

import { MaterialIcons } from '@expo/vector-icons';
import { BorderRadiusContainer } from '../../components/Container';
import NumberToMoney from '../../functions/NumberToMoney';
import { H5 } from '../../components/Text';

import axiosApi from '../../services/apiRequest';
import { colors, metrics } from '../../styles';
import InfoCardItem from '../../components/InfoCardItem';
import ProgressResume from '../../components/ProgressResume';
import useUserData from '../../hooks/useUserData';
import { AxiosResponse } from 'axios';
import { Loading } from '../../components/Loading';
import { IExpense } from '../../models/expense';
import { ExpenseImageContainer } from './styles';
import { categoryInfos } from '../../constants/categoriesTypes';

const List = Animatable.createAnimatableComponent(FlatList);

const ExpensesListScreen = () => {
  const { user } = useUserData();

  const [expensesList, setExpensesList] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get('/expenses', options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setExpensesList(response.data.expenses);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItem = ({ item }: { item: IExpense }) => {
    const percentage = item.value / item.expense.maxValue;

    return (
      <InfoCardItem
        title={item.expense.category}
        value={item.value}
        bottomInfo={
          <ProgressResume
            progress={percentage}
            leftContent={
              <H5 color="text">
                {`valor estipulado R$ ${NumberToMoney(item.expense.maxValue)}`}
              </H5>
            }
            rightContent={<H5 color="text">{percentage * 100}% atingido</H5>}
          />
        }
        image={
          <ExpenseImageContainer
            color={categoryInfos[item.expense.category].color ?? colors.green}
          >
            {categoryInfos[item.expense.category].icon ?? (
              <MaterialIcons
                name="attach-money"
                size={24}
                color={colors.white}
              />
            )}
          </ExpenseImageContainer>
        }
      />
    );
  };

  return (
    <BorderRadiusContainer
      style={{ paddingTop: metrics.base * 7, paddingHorizontal: 16 }}
    >
      {loading ? (
        <Loading />
      ) : (
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
          data={expensesList}
        />
      )}
    </BorderRadiusContainer>
  );
};

export default ExpensesListScreen;
