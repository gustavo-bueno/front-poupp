import React from 'react';
import { Image, View } from 'react-native';
import { metrics } from '../../styles';
import { H2 } from '../Text';

import { IProps } from './IProps';
import { CardPostContainer } from './styles';

const PostCard: React.FC<IProps> = ({
  title,
  image,
  content,
  style,
}: IProps) => {
  return (
    <CardPostContainer style={style}>
      <Image
        resizeMode="cover"
        style={{ width: '100%', height: '60%', borderRadius: 8 }}
        source={{ uri: image }}
      />
      {title && (
        <View style={{ height: '40%', paddingHorizontal: metrics.base * 2 }}>
          <H2
            color="text"
            fontWeight="medium"
            style={{ marginTop: metrics.base }}
          >
            {title}
          </H2>
        </View>
      )}
      {content && content}
    </CardPostContainer>
  );
};

export default PostCard;
