import React, { useState } from 'react'

import {
    ChartsContainer,
    Header,
    Title,
    BalanceContainer,
    Total,
    Label,
    MainContent,
    TabsContainer,
    Tab,
    TabText,
    TabIndicatior,
    FilterContainer,
    TotalFiltred,
    ColapsableList,
    CategoriesList,
    CategoriesTitle,
} from './styles'

import CategorieResume from '../../components/CategorieResume'

import { FlatList, SafeAreaView } from 'react-native';
import NumberToMoney from '../../functions/NumberToMoney';
import { colors } from '../../styles';

const ChartSreen: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>('')

    const data = [
        {
            title: 'Teste1',
            percentage: 40
        },
        {
            title: 'Teste2',
            percentage: 40
        },
        {
            title: 'Teste3',
            percentage: 20
        }
    ]

    return (
        <SafeAreaView>
            <ChartsContainer>
                <Header>
                    <Title>Gráficos</Title>
                    <BalanceContainer>
                        <Total>R$ {NumberToMoney(2700)}</Total>
                        <Label>Balanço geral</Label>
                    </BalanceContainer>
                </Header>
                <MainContent>
                    <TabsContainer>
                        <Tab onPress={() => setActiveTab('incomes')}>
                            <TabText>Saídas</TabText>
                            <TabIndicatior theme={{color: activeTab === 'incomes' ? colors.green : colors.gray}}/>
                        </Tab>
                        <Tab onPress={() => setActiveTab('outcomes')}>
                            <TabText>Entradas</TabText>
                            <TabIndicatior theme={{color: activeTab === 'outcomes' ? colors.green : colors.gray}}/>
                        </Tab>
                    </TabsContainer>
                    <FilterContainer>
                        <TotalFiltred>R$ {NumberToMoney(-1950)}</TotalFiltred>
                        <ColapsableList />
                    </FilterContainer>
                    <CategoriesList>
                        <CategoriesTitle>Categorias</CategoriesTitle>
                        <FlatList 
                            data={data}
                            horizontal
                            keyExtractor={(categorie, index) => index.toString()}
                            renderItem={({item}) => (
                                <CategorieResume title={item.title} percentage={item.percentage}/>
                            )}
                        />
                    </CategoriesList>
                </MainContent>
            </ChartsContainer>
        </SafeAreaView>
    )
}

export default ChartSreen