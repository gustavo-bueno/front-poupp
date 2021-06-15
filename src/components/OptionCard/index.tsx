import React from 'react'
import {
    OptionContainer,
    OptionIcon,
    OptionTitle
} from './styles'

import { IProps } from './IProps'

const OptionCard = ({title, icon, ...rest}: IProps) => (
    <OptionContainer {...rest}>
        <OptionIcon>{icon}</OptionIcon>
        <OptionTitle>{title}</OptionTitle>
    </OptionContainer>
)

export default OptionCard