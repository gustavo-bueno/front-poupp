import React from 'react'
import { SafeAreaView } from 'react-native'
import {    
    CardScreenContainer,
    CardContainer,
    MainContent,
    Transactions,
    TransactionsTitle
} from './styles'

import MovementCard from '../../components/MovementCard'
import Card from '../../components/Card'

const CardScreen: React.FC = () => {
    return (
        <SafeAreaView>
        <CardScreenContainer showsVerticalScrollIndicator={false}>
            <CardContainer>
                <Card balance={1979.90} day={9} username={'Wilian Lorencetto'}/>
            </CardContainer>
            <MainContent>
                <Transactions>
                    <TransactionsTitle>Segunda-feira, 30 Jan</TransactionsTitle>
                    <MovementCard entries title="Salário" value={1000} />
                    <MovementCard entries title="Salário" value={1000} />
                    <MovementCard title="Salário" value={1000} />
                </Transactions>
            </MainContent>
        </CardScreenContainer>
        </SafeAreaView>
    )
}

export default CardScreen