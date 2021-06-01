import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'
import { colors, metrics } from '../../styles'

export const AddButton = styled(RectButton)`
    width: ${metrics.base * 18}px;
    height: ${metrics.base * 11}px;
    margin-top: -${metrics.base * 5}px;
    border-radius: ${metrics.base * 4}px;
    background-color: ${colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
`