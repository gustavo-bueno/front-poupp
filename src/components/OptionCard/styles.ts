import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { colors, fontFamily, metrics } from '../../styles'

export const OptionContainer = styled(RectButton)`
    height: ${metrics.base * 28}px;
    width: ${metrics.base * 24}px;
    border-radius: ${metrics.base * 4}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
`

export const OptionIcon = styled.View`
    height: ${metrics.base * 12}px;
    width: ${metrics.base * 12}px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OptionTitle = styled.Text`
    font-size: ${metrics.base * 4}px;
    color: ${colors.text};
    font-family: ${fontFamily.regular};
`