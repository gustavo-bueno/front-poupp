import styled from 'styled-components/native'
import { colors, fontFamily, metrics } from '../../styles'

export const CategorieResumeContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    jusify-content: space-around;
    background-color: ${colors.white}
    height: ${metrics.hp(10)}px;
    width: ${metrics.wp(6)}px;
    border-radius: ${metrics.base * 4}
`

export const Percentage = styled.Text`
    font-size: ${metrics.base * 3}px;
    color: ${colors.text};
    font-family: ${fontFamily.medium};
`

export const CategorieTitle = styled.Text`
    font-size: ${metrics.base * 2.5}px;
    font-family: ${fontFamily.regular};
    color: ${colors.text};
`