import React from 'react'
import {
    OptionContainer,
    OptionIcon,
    OptionTitle
} from './styles'

interface props {
    title: string,
    icon: JSX.Element
}

const OptionCard = ({title, icon}: props) => (
    <OptionContainer>
        <OptionIcon>{icon}</OptionIcon>
        <OptionTitle>{title}</OptionTitle>
    </OptionContainer>
)

export default OptionCard