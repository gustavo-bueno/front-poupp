import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { H1 } from '../../components/Text';
import { BorderRadiusContainer } from '../../components/Container';
import { PostContent, PostImage, ProducedByText } from './styles';
import { colors, metrics } from '../../styles';
import { IPost } from '../../models/post';

const PostDetailScreen: React.FC = () => {
  const { post } = useRoute()?.params as { post: IPost };
  return (
    <View style={{ flex: 1, backgroundColor: colors.green }}>
      <BorderRadiusContainer>
        <H1
          style={{ marginTop: metrics.base * 3 }}
          fontWeight="bold"
          color="text"
        >
          {post.title}
        </H1>
        <PostImage source={{ uri: post.image }} />
        <ProducedByText>Por {post.author.name}</ProducedByText>
        <PostContent>{post.content}</PostContent>
      </BorderRadiusContainer>
    </View>
  );
};

export default PostDetailScreen;
