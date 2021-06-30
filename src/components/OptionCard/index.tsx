import React from 'react'
import {
    OptionContainer,
    OptionIcon,
    OptionTitle
} from './styles'

import { IProps } from './IProps'
import { metrics } from '../../styles'

const OptionCard = ({title, icon, ...rest}: IProps) => (
    <OptionContainer rippleContainerBorderRadius={metrics.base * 4}  {...rest}>
        <OptionIcon>{icon}</OptionIcon>
        <OptionTitle>{title}</OptionTitle>
    </OptionContainer>
)

export default OptionCard