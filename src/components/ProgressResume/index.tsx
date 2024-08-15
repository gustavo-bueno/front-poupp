import React from 'react';
import { View } from 'react-native';
import { ProgressBar } from '../ProgressBar';
import { ProgressResumeProps } from './interface';

import { Content } from './styles';

const ProgressResume: React.FC<ProgressResumeProps> = ({
  rightContent,
  leftContent,
  progress,
}) => {
  return (
    <View>
      <ProgressBar progress={progress} />
      <Content>
        {leftContent}
        {rightContent}
      </Content>
    </View>
  );
};

export default ProgressResume;
