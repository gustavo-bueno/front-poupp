import styled from 'styled-components/native';
import WaveSvg from '../../assets/background.svg';
import { metrics } from '../styles';

export const Wave = styled(WaveSvg).attrs({
  width: metrics.wp(100),
})`
  position: absolute;
  top: ${-metrics.hp(7)}px;
  z-index: 0;
`;