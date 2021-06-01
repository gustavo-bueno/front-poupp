import styled from 'styled-components/native'
import { colors, fontFamily, metrics } from '../../styles'

interface props {
    theme: {
        background?: string,
        color?: string
    }
}

export const CardConatiner = styled.View`
    height: ${metrics.base * 14}px;
    width: 100%;
    border-radius: ${metrics.base * 4}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${metrics.base * 4}px;
    background-color: white;
    margin-top: ${metrics.base * .5}px;
    margin-bottom: ${metrics.base * 1}px;
`

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ColoredBar = styled.View`
    height: ${metrics.base * 4}px;
    width: ${metrics.base * 1}px;
    border-radius: ${metrics.base * 1}px;
    margin-right: ${metrics.base * 1}px;
    background-color: ${(props: props) => props.theme.color};
`

export const Title = styled.Text`
    font-size: ${metrics.base * 5}px;
    font-family: ${fontFamily.medium};
    color: ${(props: props) => props.theme.color};
`

export const ValueContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ValueDescription = styled.Text`
    font-size: ${metrics.base * 5}px;
    font-family: ${fontFamily.medium};
    color: ${(props: props) => props.theme.color};
`

export const Value = styled.Text`
    font-size: ${metrics.base * 5}px;
    font-family: ${fontFamily.medium};
    color: ${colors.text};
`