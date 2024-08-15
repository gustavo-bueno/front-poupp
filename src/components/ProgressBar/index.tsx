import React from 'react';

import { IProps } from './IProps';
import { Progress, ProgressContainer } from './styles';

export const ProgressBar = ({ progress }: IProps) => {
  return (
    <ProgressContainer>
      <Progress style={{ width: `${progress * 100}%` }} />
    </ProgressContainer>
  );
};
