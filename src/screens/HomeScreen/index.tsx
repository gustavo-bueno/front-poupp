import React from 'react';
import { colors, metrics } from '../../styles';
import {
  HomeContainer,
  HeaderContent,
  Username,
  TotalContent,
  Total,
  TotalLabel,
  MainContent,
  ResumeContainer,
  Resume,
  ResumeContent,
  ResumeIndicator,
  ResumeValue,
  ResumeType,
  Divider,
  RecentsContainer,
  RecentsTitle,
  SeeMoreButton,
  SeeMoreText,
  OptionsContainer,
  OptionsTitle,
  OptionsList,
  Chart,
  Labels,
  Label,
  Marker,
  LabelText,
} from './styles';

import NumberToMoney from '../../functions/NumberToMoney';

import { PieChart } from 'react-native-svg-charts';
import 'react-native-svg';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import MovementCard from '../../components/MovementCard';
import OptionCard from '../../components/OptionCard';
import { SafeAreaView } from 'react-native';
import { ROUTES } from '../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    name: 'Alimentação',
    key: 1,
    value: 100,
    svg: { fill: '#04B889' },
    arc: { cornerRadius: 4 },
  },
  {
    name: 'Transporte',
    key: 2,
    value: 35,
    svg: { fill: '#00E6B0' },
    arc: { cornerRadius: 4 },
  },
  {
    name: 'Luz',
    key: 3,
    value: 10,
    svg: { fill: '#33404F' },
    arc: { cornerRadius: 4 },
  },
];

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <HomeContainer showsVerticalScrollIndicator={false}>
        <HeaderContent>
          <Username>Olá, Wilian</Username>
          <TotalContent>
            <Total>R$ {NumberToMoney(20749)}</Total>
            <TotalLabel>Balanço Mensal</TotalLabel>
          </TotalContent>
        </HeaderContent>
        <MainContent>
          <ResumeContainer>
            <Resume>
              <ResumeIndicator theme={{ color: colors.green }}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={metrics.base * 5}
                  color="white"
                />
              </ResumeIndicator>
              <ResumeContent>
                <ResumeValue>R$ {NumberToMoney(1950)}</ResumeValue>
                <ResumeType>Entradas</ResumeType>
              </ResumeContent>
            </Resume>
            <Divider />
            <Resume>
              <ResumeIndicator theme={{ color: colors.red }}>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={metrics.base * 5}
                  color="white"
                />
              </ResumeIndicator>
              <ResumeContent>
                <ResumeValue>R$ {NumberToMoney(1950)}</ResumeValue>
                <ResumeType>Saídas</ResumeType>
              </ResumeContent>
            </Resume>
          </ResumeContainer>
          <Chart>
            <PieChart
              style={{ height: metrics.base * 50, width: metrics.base * 50 }}
              outerRadius={'70%'}
              innerRadius={30}
              data={data}
            />
            <Labels>
              {data.map((data) => (
                <Label key={data.key}>
                  <Marker theme={{ color: data.svg.fill }} />
                  <LabelText>{data.name}</LabelText>
                </Label>
              ))}
            </Labels>
          </Chart>
          <RecentsContainer>
            <RecentsTitle>Recentes</RecentsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
            <SeeMoreButton onPress={() => navigate(ROUTES.TRANSACTIONS)}>
              <SeeMoreText>Ver mais +</SeeMoreText>
            </SeeMoreButton>
          </RecentsContainer>
          <OptionsContainer>
            <OptionsTitle>Gerenciar</OptionsTitle>
            <OptionsList>
              <OptionCard
                title="Contas"
                route=""
                icon={
                  <FontAwesome
                    name="bank"
                    size={metrics.base * 10}
                    color={colors.text}
                  />
                }
              />
              <OptionCard
                route={ROUTES.CARD}
                title="Cartões"
                icon={
                  <AntDesign
                    name="creditcard"
                    size={metrics.base * 10}
                    color={colors.text}
                  />
                }
              />
              <OptionCard
                route=""
                title="Metas"
                icon={
                  <Feather
                    name="target"
                    size={metrics.base * 10}
                    color={colors.text}
                  />
                }
              />
            </OptionsList>
          </OptionsContainer>
        </MainContent>
      </HomeContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;
