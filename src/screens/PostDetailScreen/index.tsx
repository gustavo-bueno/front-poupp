import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { H1 } from '../../components/Text';

import { Container, PostContent, PostImage, ProducedByText } from './styles';
import { colors, metrics } from '../../styles';

const PostDetailScreen: React.FC = () => {
  const { post } = useRoute()?.params as any;
  return (
    <View style={{ flex: 1, backgroundColor: colors.green }}>
      <Container>
        <H1
          style={{ marginTop: metrics.base * 3 }}
          fontWeight="bold"
          color="text"
        >
          {post.title}
        </H1>
        <PostImage source={{ uri: post.image }} />
        <ProducedByText>Por Gustavo Carvalho</ProducedByText>
        <PostContent>{post.content}</PostContent>
      </Container>
    </View>
  );
};

export default PostDetailScreen;
