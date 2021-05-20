import { TextProps } from 'react-native';
import styled from 'styled-components/native';

import { fontSize, colors } from '../../styles';

interface ICustomText extends TextProps {
  color?: string;
  fontWeight?: string;
  bold?: boolean;
}

const getColor = ({ color = 'black' }: ICustomText) => {
  return colors[color] || color;
};

const fontFamily = ({ bold = true }: ICustomText) => {
  if (bold) return 'Nunito-Bold';

  return 'Nunito';
};

export const H0 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h0}px`};
  font-family: ${fontFamily};
  color: ${getColor};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

export const H1 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h1}px`};
  font-family: ${fontFamily};
  color: ${getColor};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;
export const H2 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h2}px`};
  font-family: ${fontFamily};
  color: ${getColor};
`;

export const H3 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h3}px`};
  font-family: ${fontFamily};
  color: ${getColor};
`;

export const H4 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h4}px`};
  font-family: ${fontFamily};
  color: ${getColor};
`;
