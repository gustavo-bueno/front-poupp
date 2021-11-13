import React, { useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { AntDesign } from '@expo/vector-icons';

import AddExtraIncomeGoalModal from './AddExtraIncomeGoalModal';
import MiniCard from '../../components/MiniCard';
import { H1, H2, H3 } from '../../components/Text';
import Button from '../../components/Button';
import PostCard from '../../components/PostCard';
import { ProgressBar } from '../../components/ProgressBar';
import MoneyText from '../../components/MoneyText';
import { BorderRadiusContainer } from '../../components/Container';
import { ROUTES } from '../../constants/routes';
import { colors, metrics } from '../../styles';
import { NoGoalsContainer, NoGoalsContent, Title } from './styles';
import { IGoal } from '../../models/goal';
import { IPost } from '../../models/post';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ripple from 'react-native-material-ripple';
import { SheetButton } from './AddExtraIncomeGoalModal/styles';
import AddValueGoalModal from './AddGoalValueModa.tsx';

const data: any[] = [
  {
    goalValue: 200000,
    achieved: 70000,
  },
];

const extraIncomeTips = [
  {
    title: 'Receita de brigadeiro',
    image:
      'https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content:
      'Ingredientes - Brigadeiro de festa 2 \n latas de leite condensado 8 \n colheres de Nescau 2.0 \n 1 colher de sopa de margarina \n 400g de chocolate granulado',
  },
  {
    title: 'Você realmente precisa de todas as suas roupas?',
    image:
      'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content:
      'Você pode separá-las, e se estiverem em boas condições, vendê-las para brechós, ou fazer o seu própio!',
  },
];

const ExtraIncomeScreen: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [addValueModalOpen, setAddValueModalOpen] = useState(false);
  const { navigate } = useNavigation();

  const renderExtraIcomePost = ({ item }: { item: IPost }) => (
    <MiniCard
      onPress={() => navigate(ROUTES.POST_DETAIL, { post: item })}
      title={item.title}
      image={item.image}
    />
  );

  const renderExtraIncomeGoalItem = ({ item }: { item: IGoal }) => {
    const percentage = item.achieved / item.goalValue;
    return (
      <Ripple onPress={() => sheetRef.current?.open()}>
        <PostCard
          style={{ marginLeft: metrics.base }}
          content={
            <View style={{ paddingHorizontal: metrics.base * 2.5 }}>
              <MoneyText
                value={item.goalValue}
                fontSize="h0"
                style={{ fontSize: 24, marginVertical: metrics.base }}
              />
              <ProgressBar progress={percentage} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <H3 color="text">
                  <MoneyText fontSize="h2" value={item.achieved} />
                  {' arrecadado'}
                </H3>
                <H2 color="text">{percentage * 100}% concluído</H2>
              </View>
            </View>
          }
          image="https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </Ripple>
    );
  };

  const sheetRef = useRef<RBSheet>(null);

  return (
    <View style={{ backgroundColor: colors.green }}>
      <BorderRadiusContainer>
        <Title>Minhas metas</Title>
        {data.length === 0 ? (
          <NoGoalsContainer>
            <NoGoalsContent>
              <H2>Você ainda não possui metas :(</H2>
            </NoGoalsContent>
          </NoGoalsContainer>
        ) : (
          <FlatList
            style={{
              maxHeight: metrics.hp(25),
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={data}
            keyExtractor={(_, idx) => idx.toString()}
            horizontal
            renderItem={renderExtraIncomeGoalItem}
          />
        )}
        <Button
          onPress={() => setModalOpen(true)}
          style={{ marginTop: metrics.base * 2 }}
          title="Adicionar meta"
        />
        <H1
          fontWeight="bold"
          style={{
            marginVertical: metrics.base * 4,
          }}
        >
          Que tal?
        </H1>
        <FlatList
          data={extraIncomeTips}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={renderExtraIcomePost}
        />
      </BorderRadiusContainer>
      <AddExtraIncomeGoalModal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
      <AddValueGoalModal
        visible={addValueModalOpen}
        onRequestClose={() => setAddValueModalOpen(false)}
      />
      <RBSheet
        customStyles={{
          container: {
            borderRadius: metrics.borderRadius,
          },
        }}
        height={metrics.hp(25)}
        ref={sheetRef}
      >
        <View
          style={{ justifyContent: 'center', alignItems: 'center', height: 40 }}
        >
          <AntDesign name="minus" size={40} color={colors.gray} />
        </View>
        <SheetButton
          onPress={() => {
            setAddValueModalOpen(true);
            sheetRef.current?.close();
          }}
        >
          <H2 color="green">Adicionar valor</H2>
        </SheetButton>
        <SheetButton style={{ borderTopWidth: 0 }}>
          <H2>Apagar meta</H2>
        </SheetButton>
      </RBSheet>
    </View>
  );
};

export default ExtraIncomeScreen;
