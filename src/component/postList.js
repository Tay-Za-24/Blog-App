import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import postService from '../services/postServices';
import styles from '../screens/Home/home.style';
import moment from 'moment';
import { getRandomSampleImage } from '../util/getRandomImage';

const PostList = ({navigation}) => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateToBlog = (item) => {
    navigation.navigate('Blog', { post: item });
  }
  
  const fetchPosts = () => {
    setLoading(true);
    postService
      .getAllPosts()
      .then((response) => {
        setPostList(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const formatCreatedAt = (timestamp) => {
    const createdDate = moment(timestamp);
    return createdDate.format('MMM D'); 
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime;
  };

  return (
    <View style={{ height: '68%', paddingBottom: '10%' }}>
      {loading ? ( 
        <ActivityIndicator size="large" color="#000000" style={styles.loadingIndicator} />
      ) : (
        <FlatList
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToBlog(item)}>
            <View style={styles.post}>
              <View>
              {item.image ? (
                  <Image
                    style={styles.image}
                    source={{ uri: item.image }} 
                  />
                ) : (
                  <Image
                    style={styles.image}
                    source={getRandomSampleImage(item)}
                  />
                )}
              </View>
              <View style={styles.desc}>
                  <Text style={styles.postTtl}>{item.title}</Text>
                  <Text>{item.body}</Text>
                  <View style={{flexDirection : 'row'}}>
                      <Text style={styles.postDate}>{formatCreatedAt(item.created_at)}</Text>
                      <Text style={styles.readTime}>{calculateReadingTime(item.body)} minute</Text>
                  </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      ) }
    </View>
  );
};

export default PostList;
