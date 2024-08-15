import styled from 'styled-components/native';
import WaveSvg from '../../assets/background.svg';
import { metrics } from '../styles';

export const Wave = styled(WaveSvg).attrs({
  width: metrics.wp(200),
  height: metrics.hp(20),
})`
  position: absolute;
  top: 0;
  right: ${-metrics.wp(70)}px;
  z-index: 0;
`;
