import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './blog.style';
import { getRandomSampleImage } from '../../util/helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {SlideInRight, LightSpeedInRight} from 'react-native-reanimated';

const Blog = ({route, navigation}) => {
  const {post} = route.params;

  const navigateToHome = () => {
    navigation.navigate('Main')
  }

  
  const toggleDrawer = () => {
    navigation.toggleDrawer()
  }

  return (
    <View>
      <Animated.View entering={LightSpeedInRight.delay(500)} style={styles.navBar}>
        <TouchableOpacity style={{left : 20}}  onPress={navigateToHome} >
          <Ionicons name='chevron-back-outline'  size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft : '75%'}} onPress={toggleDrawer}>
          <Ionicons name='menu-outline' size={30} />
        </TouchableOpacity>
      </Animated.View>
      <Image source={post.image ? { uri: post.image } : getRandomSampleImage(post)}  style={styles.image}/>
      <ScrollView style={styles.desc}>
        <Text style={styles.blogTtl}>{post.title}</Text>
        <Text style={styles.blogBody}>{post.body}</Text>
      </ScrollView>
    </View>
  );
};

export default Blog