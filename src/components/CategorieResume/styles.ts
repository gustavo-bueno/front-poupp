import styled from 'styled-components/native'
import { colors, fontFamily, metrics } from '../../styles'

export const CategorieResumeContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.white}
    height: ${metrics.hp(22)}px;
    width: ${metrics.wp(32)}px;
    border-radius: ${metrics.base * 4}px;
    margin-right: ${metrics.base * 3}px;
`

export const Percentage = styled.Text`
    font-size: ${metrics.base * 4}px;
    color: ${colors.text};
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: ${fontFamily.medium};
    margin-top: ${metrics.base * 5.5}px;
`

export const CategorieTitle = styled.Text`
    font-size: ${metrics.base * 4}px;
    font-family: ${fontFamily.regular};
    color: ${colors.text};
`