import React from 'react'
import { colors, fontFamily, metrics } from '../../styles'
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
    Chart
} from './styles'

import {
    PieChart
} from 'react-native-chart-kit'

import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import MovementCard from '../../components/MovementCard'
import OptionCard from '../../components/OptionCard'

const HomeScreen: React.FC = () => {

    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    }

    const data = [
        { name: 'Alimentação', value: 300, color: 'rgba(131, 167, 234, 1)', legendFontColor: colors.text, legendFontSize: metrics.base * 3.5 },
        { name: 'Trasporte', value: 45, color: '#F00', legendFontColor: colors.text, legendFontSize: metrics.base * 3.5 },
        { name: 'Contas', value: 650, color: '#ff5', legendFontColor: colors.text, legendFontSize: metrics.base * 3.5 }
      ]

    return (
        <HomeContainer>
            <HeaderContent>
                <Username>Olá, Wilian</Username>
                <TotalContent>
                    <Total>R$ 20.749</Total>
                    <TotalLabel>Balanço Mensal</TotalLabel>
                </TotalContent>
            </HeaderContent>
            <MainContent>
                <ResumeContainer>
                    <Resume>
                        <ResumeIndicator theme={{color: colors.green}}>
                            <MaterialIcons name="keyboard-arrow-up" size={metrics.base * 5} color="white" />
                        </ResumeIndicator>
                        <ResumeContent>
                            <ResumeValue>R$ 1.950,00</ResumeValue>
                            <ResumeType>Entradas</ResumeType>
                        </ResumeContent>
                    </Resume>
                    <Divider />
                    <Resume>
                        <ResumeIndicator theme={{color: colors.red}}>
                            <MaterialIcons name="keyboard-arrow-down" size={metrics.base * 5} color="white" />
                        </ResumeIndicator>
                        <ResumeContent>
                            <ResumeValue>R$ 1.950,00</ResumeValue>
                            <ResumeType>Saídas</ResumeType>
                        </ResumeContent>
                    </Resume>
                </ResumeContainer>
                <Chart>
                    <PieChart 
                        data={data}
                        width={metrics.base * 80}
                        height={metrics.base * 40}
                        chartConfig={chartConfig}
                        accessor="value"
                        backgroundColor="transparent"
                        paddingLeft="0"
                    />
                </Chart>
                <RecentsContainer>
                    <RecentsTitle>Recentes</RecentsTitle>
                    <MovementCard title="Salário" value={1000} entries={true}/>
                    <MovementCard title="Conta de luz" value={1000} entries={false}/>
                    <SeeMoreButton><SeeMoreText>Ver mais +</SeeMoreText></SeeMoreButton>
                </RecentsContainer>
                <OptionsContainer>
                    <OptionsTitle>Gerenciar</OptionsTitle>
                    <OptionsList>
                        <OptionCard title="Contas" icon={<FontAwesome name="bank" size={metrics.base * 10} color={colors.text} />}/>
                        <OptionCard title="Cartões" icon={<AntDesign name="creditcard" size={metrics.base * 10} color={colors.text} />}/>
                        <OptionCard title="Metas" icon={<Feather name="target" size={metrics.base * 10} color={colors.text} /> }/>
                    </OptionsList>
                </OptionsContainer>
            </MainContent>
        </HomeContainer>
    )
}

export default HomeScreen