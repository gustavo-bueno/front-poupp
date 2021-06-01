import React from 'react'
import { colors } from '../../styles'

import {
    CardConatiner,
    TitleContainer,
    Title,
    ColoredBar,
    ValueContainer,
    ValueDescription,
    Value
} from './styles'

interface data {
    title: string,
    value: number,
    entries: boolean
}

const MovementCard = ({entries, title, value}: data) => {
    return (
        <CardConatiner>
            <TitleContainer>
                <ColoredBar theme={{color: entries ? colors.green : colors.red}}/>
                <Title theme={{color: entries ? colors.green : colors.red}}>{title}</Title>
            </TitleContainer>
            <ValueContainer>
                <ValueDescription theme={{color: entries ? colors.green : colors.red}}>{entries ? '+R$' : '-R$'}</ValueDescription>
                <Value>{value}</Value>
            </ValueContainer>
        </CardConatiner>
    )
}

export default MovementCard