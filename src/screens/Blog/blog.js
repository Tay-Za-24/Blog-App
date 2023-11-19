import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './blog.style';
import { getRandomSampleImage } from '../../util/helper';

const Blog = ({route}) => {
  const {post} = route.params;
  return (
    <View>
      <Image source={post.image ? { uri: post.image } : getRandomSampleImage(post)}  style={styles.image}/>
      <View style={styles.desc}>
        <Text style={styles.blogTtl}>{post.title}</Text>
        <Text style={styles.blogBody}>{post.body}</Text>
      </View>
    </View>
  );
};

export default Blog