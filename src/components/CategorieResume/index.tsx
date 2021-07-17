import React from 'react'
import {
    CategorieResumeContainer,
    Percentage,
    CategorieTitle
} from './styles'
import IProps from './IProps'

import { ProgressCircle } from 'react-native-svg-charts'
import { colors, metrics } from '../../styles'

const CategorieResume = ({ percentage, title }: IProps) => {
    return (
        <CategorieResumeContainer >
            <ProgressCircle progress={percentage / 100} style={{ height: metrics.base * 17, width: metrics.base * 17}} progressColor={colors.green}>
                <Percentage>{percentage}%</Percentage>
            </ProgressCircle>
            <CategorieTitle>{title}</CategorieTitle>
        </CategorieResumeContainer>
    )
}

export default CategorieResume