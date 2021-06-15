import React from 'react'
import NumberToMoney from '../../functions/NumberToMoney'
import {
    CardContainer,
    BlackBar,
    CardContent,
    WhiteBar,
    Infos,
    BalanceContent,
    UserContent,
    Ball,
    Username,
    Date,
    BalanceText
} from './styles'

import { IProps } from './IProps'

const Card: React.FC<IProps> = ({username, balance, day}) => {
    return (
        <CardContainer>
            <BlackBar />
            <CardContent>
                <WhiteBar />
                <Infos>
                    <UserContent>
                        <Ball />
                        <Username>{username}</Username>
                    </UserContent>
                    <BalanceContent>
                        <Date>{day}/mês</Date>
                        <BalanceText>R$ {NumberToMoney(balance)}{'\n'}Balanço</BalanceText>
                    </BalanceContent>
                </Infos>
            </CardContent>
        </CardContainer>
    )
}

export default Card