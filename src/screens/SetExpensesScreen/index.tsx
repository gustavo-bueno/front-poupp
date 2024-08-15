import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import { H1, H2, H3, H4 } from '../../components/Text';
import { metrics } from '../../styles';
import Ripple from 'react-native-material-ripple';
import InfoCardItem from '../../components/InfoCardItem';
import useUserData from '../../hooks/useUserData';
import { getTransactionsCategories } from '../../services/transactions';
import { IExpense } from '../../models/expense';
import { categoryInfos } from '../../constants/categoriesTypes';
import { ExpenseImageContainer } from '../ExpensesListScreen/styles';
import ExpensesModal from './ExpenseModal';
import { RegisterUserContext } from '../../contexts/registerUser';
import { ICategory } from '../../models/category';
import MoneyText from '../../components/MoneyText';
import NumberToMoney from '../../functions/NumberToMoney';

const List = createAnimatableComponent(FlatList);

const initialExpenses = (income: number) => [
  {
    id: '61acc79217bf67bb132d8a9e',
    maxValue: income * 0.1,
  },
  {
    id: '61acc84417bf67bb132d8aa4',
    maxValue: income * 0.3,
  },
  {
    id: '61acc85917bf67bb132d8aa8',
    maxValue: income * 0.1,
  },
  {
    id: '61acc86e17bf67bb132d8aac',
    maxValue: income * 0.1,
  },
];

const SetExpensesScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();
  const [modalOpen, setModalOpen] = useState(false);
  const [expenseToUpdate, setExpenseToUpdate] = useState<any>({});
  const [data, setData] = useState<ICategory[]>([]);
  const { sendInitialData, incomeValue } = useContext(RegisterUserContext);
  const [expenses, setExpenses] = useState<{ id: string; maxValue: number }[]>(
    initialExpenses(incomeValue)
  );

  const totalOutcome = expenses.reduce((acc, item) => {
    return (acc += item.maxValue);
  }, 0);

  const getItemPrice = (itemId: string) => {
    const currentExpense = expenses.find(
      (expenseItem) => expenseItem.id === itemId
    );
    return currentExpense?.maxValue;
  };

  const renderItem = ({ item }: { item: ICategory }) => {
    if (item.income) {
      return <></>;
    }
    return (
      <Ripple
        onPress={() => {
          setExpenseToUpdate(item);
          setModalOpen(true);
        }}
        rippleContainerBorderRadius={metrics.borderRadius}
      >
        <InfoCardItem
          title={item.name}
          value={getItemPrice(item._id) ?? 0}
          bottomInfo={<H4>clique para editar</H4>}
          image={
            <ExpenseImageContainer
              color={categoryInfos[item.type].color ?? 'red'}
            >
              {categoryInfos[item.type].icon ?? <></>}
            </ExpenseImageContainer>
          }
        />
      </Ripple>
    );
  };

  const updateExpenses = (expense: { id: string; maxValue: number }) => {
    const alreadyExists = expenses.find(
      (expenseItem) => expenseItem.id === expense.id
    );
    if (alreadyExists) {
      const newList = expenses.filter(
        (expenseItem) => expenseItem.id !== expense.id
      );
      setExpenses([...newList, expense]);
    } else {
      setExpenses((state) => [...state, expense]);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getTransactionsCategories(user.token);
      setData(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      {expenseToUpdate.type && (
        <ExpensesModal
          updateExpense={updateExpenses}
          data={expenseToUpdate}
          onRequestClose={() => setModalOpen(false)}
          visible={modalOpen}
        />
      )}
      <BorderRadiusContainer>
        <View>
          <H3>
            Esse foi o tanto planejado para você, mas lembre, é totalmente
            editável para as suas necessidades.
          </H3>
          <H1 style={{ marginVertical: metrics.base * 2 }} color="green">
            Valor de entradas: R${NumberToMoney(incomeValue)}
          </H1>
          <View style={{ alignItems: 'center' }}>
            <MoneyText fontSize="h0" value={totalOutcome * 100} />
            <H2>Valor total de saídas</H2>
          </View>
          <List
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: metrics.hp(70), marginTop: metrics.base * 2 }}
            useNativeDriver
            animation="bounceInDown"
            contentInsetAdjustmentBehavior="automatic"
            duration={1000}
            renderItem={renderItem as any}
            keyExtractor={(_, idx) => idx.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: metrics.base }} />
            )}
            data={data}
          />
        </View>
        <Button
          style={{ marginTop: metrics.base }}
          title="Pronto!"
          onPress={() => sendInitialData(expenses)}
        />
      </BorderRadiusContainer>
    </>
  );
};

export default SetExpensesScreen;
