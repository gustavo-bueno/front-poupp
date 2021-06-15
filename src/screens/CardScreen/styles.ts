import styled from 'styled-components/native'
import { colors, metrics, fontFamily } from '../../styles'

export const CardScreenContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${colors.green};
`

export const CardContainer = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${metrics.base * 13}px;
    padding-bottom: ${metrics.base * 13}px;
`

export const MainContent = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.background};
    min-height: ${metrics.hp(90)}px;
    width: 100%;
    border-top-right-radius: ${metrics.base * 12.5}px;
    border-top-left-radius: ${metrics.base * 12.5}px;
    padding-top: ${metrics.base * 5}px;
    padding-bottom: ${metrics.base * 5}px;
`

export const Transactions = styled.View`
  display: flex;
  margin-top: ${metrics.base * 6}px;
  width: 90%;
`

export const TransactionsTitle = styled.Text`
  margin-bottom: ${metrics.base * 1}px;
  margin-left: ${metrics.base * 4}px;
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`