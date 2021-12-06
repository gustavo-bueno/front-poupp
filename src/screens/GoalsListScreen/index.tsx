import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import * as Animatable from 'react-native-animatable';

import { IGoal } from '../../models/goal';
import { ROUTES } from '../../constants/routes';
import { BorderRadiusContainer } from '../../components/Container';
import Button from '../../components/Button';
import NumberToMoney from '../../functions/NumberToMoney';
import { H5 } from '../../components/Text';

import axiosApi from '../../services/apiRequest';
import { metrics } from '../../styles';
import { Container, styles } from './styles';
import goals from '../../icons/goals';
import InfoCardItem from '../../components/InfoCardItem';
import ProgressResume from '../../components/ProgressResume';
import useUserData from '../../hooks/useUserData';
import { AxiosResponse } from 'axios';
import { Loading } from '../../components/Loading';

const List = Animatable.createAnimatableComponent(FlatList);

const GoalsListScreen = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();

  const [goalsList, setGoalsList] = useState<IGoal[]>([]);
  const [goalAccountValue, setGoalAccountValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get('/goals', options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setGoalsList(response.data.goals);
          setGoalAccountValue(response.data.reservedToGoals);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItem = ({ item }: { item: IGoal }) => {
    const Image = goals[item.category.type];
    const percentage = goalAccountValue / item.totalValue;

    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius}
        onPress={() =>
          navigate(ROUTES.GOAL_DETAIL, { goal: item, goalAccountValue })
        }
      >
        <InfoCardItem
          title={item.title}
          value={item.totalValue}
          bottomInfo={
            <ProgressResume
              progress={percentage}
              leftContent={
                <H5 color="text">
                  {`Já possui R$ ${NumberToMoney(goalAccountValue)}`}
                </H5>
              }
              rightContent={
                <H5 color="text">
                  {percentage * 100 === 100
                    ? 'Pode ser concluída'
                    : `${Math.ceil(percentage * 100)}% completo`}
                </H5>
              }
            />
          }
          image={<Image style={styles.svg} />}
        />
      </Ripple>
    );
  };

  return (
    <Container style={{ position: 'relative' }}>
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
            data={goalsList}
          />
        )}
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => navigate(ROUTES.ADD_GOAL)} />
    </Container>
  );
};

export default GoalsListScreen;
