import { TextProps } from 'react-native';
import styled from 'styled-components/native';

import { fontSize, colors } from '../../styles';

interface ICustomText extends TextProps {
  color?: string;
  fontWeight?: 'bold' | 'medium';
}

const getColor = ({ color = 'text' }: ICustomText) => {
  return colors[color] || color;
};

const fontFamily = ({ fontWeight }: ICustomText) => {
  if (fontWeight == 'bold') return 'Ubuntu_700Bold';
  if (fontWeight == 'medium') return 'Ubuntu_500Medium';

  return 'Ubuntu_400Regular';
};

export const H0 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h0}px`};
  font-family: ${fontFamily};
  color: ${getColor};
`;

export const H1 = styled.Text<ICustomText>`
  font-size: ${`${fontSize.h1}px`};
  font-family: ${fontFamily};
  color: ${getColor};
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
