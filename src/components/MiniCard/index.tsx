import React from 'react';
import { Linking } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { IProps } from './IProps';

import { metrics } from '../../styles';
import { H3 } from '../Text';
import { MiniCardContainer, MiniCardImage, MiniCardText } from './styles';

const MiniCard = ({ title, image, channelId }: IProps) => {
  return (
    <Ripple
      style={{ marginBottom: metrics.base * 2 }}
      onPress={() =>
        Linking.canOpenURL('vnd.youtube://channel/' + channelId).then(
          (supported) => {
            if (supported) {
              return Linking.openURL('vnd.youtube://channel/' + channelId);
            } else {
              return Linking.openURL(
                'https://www.youtube.com/channel/' + channelId
              );
            }
          }
        )
      }
      rippleContainerBorderRadius={metrics.borderRadius}
    >
      <MiniCardContainer>
        <MiniCardImage source={{ uri: image }} />
        <MiniCardText>
          <H3>{title}</H3>
        </MiniCardText>
      </MiniCardContainer>
    </Ripple>
  );
};

export default MiniCard;
