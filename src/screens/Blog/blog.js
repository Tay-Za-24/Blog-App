import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './blog.style';
import { getRandomSampleImage } from '../../util/helper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Blog = ({route, navigation}) => {
  const {post} = route.params;

  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View>
      <View style={styles.navBar}>
        <TouchableOpacity style={{left : 20}}>
          <Ionicons name='chevron-back-outline'  size={30} onPress={navigateToHome} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft : '75%'}}>
          <Ionicons name='menu-outline' size={30}/>
        </TouchableOpacity>
      </View>
      <Image source={post.image ? { uri: post.image } : getRandomSampleImage(post)}  style={styles.image}/>
      <View style={styles.desc}>
        <Text style={styles.blogTtl}>{post.title}</Text>
        <Text style={styles.blogBody}>{post.body}</Text>
      </View>
    </View>
  );
};

export default Blog