import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './blog.style';
import { getRandomSampleImage } from '../../util/helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { SlideInRight, LightSpeedInRight } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import postService from '../../services/postServices';

const Blog = ({ route, navigation }) => {
  const { post } = route.params;
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    getComment()
  }, [])

  const navigateToHome = () => {
    navigation.navigate('Main');
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const getComment = async () => {
    try{
      const userInfo = await AsyncStorage.getItem('userInfo').then((res) => JSON.parse(res))
      const response = await postService.getComments(userInfo.access_token, post.id)
      setComments(response.data)
    }catch( error ){
      console.error("Error Getting comments" , error)
    }
  }

  const commentCount = comments.length;

  return (
    <View style={{ flex: 1 }}>
      <Animated.View entering={LightSpeedInRight.delay(500)} style={styles.navBar}>
        <TouchableOpacity style={{ left: 20 }} onPress={navigateToHome}>
          <Ionicons name='chevron-back-outline' size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: '75%' }} onPress={toggleDrawer}>
          <Ionicons name='menu-outline' size={30} />
        </TouchableOpacity>
      </Animated.View>
        <Image
          source={post.image ? { uri: post.image } : getRandomSampleImage(post)}
          style={styles.image}
        />
      <ScrollView style={styles.scrollView}>
        <View style={styles.desc}>
          <Text style={styles.blogTtl}>{post.title}</Text>
          <Text style={styles.blogBody}>{post.body}</Text>
        </View>
      </ScrollView>
      <View style={styles.commentBox}>
        <Text style={{color : 'white'}}>{commentCount} comments</Text>
      </View>
    </View>
  );
};

export default Blog;
