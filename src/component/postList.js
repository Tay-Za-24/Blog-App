import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import postService from '../services/postServices';
import styles from '../screens/Home/home.style';
import moment from 'moment';
import { getRandomSampleImage } from '../util/helper';
import LoadingAnimation from '../animations/loadingAnimations';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, getPostList, reversePost, setFilter } from '../store/postSlice';

const PostList = ({ navigation, searchText }) => {
  const [activeTab, setActiveTab] = useState('Featured');
  const postList = useSelector(getAllPosts)
  const [loadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    filterPosts();
  }, [searchText]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  };

  const navigateToBlog = (item) => {
    navigation.navigate('Blog', { post: item });
  };

  const filterPosts = () => {
    if (searchText) {
      dispatch(setFilter(searchText));
    } else {
      dispatch(setFilter(''));
      fetchPosts();
    }
  };


  const fetchPosts = () => {
    setLoadingComplete(false);
  
    setTimeout(() => {
      dispatch(getPostList()).unwrap().then(() => {
        setLoadingComplete(true);
      });
    }, 1500);
  };


  const formatCreatedAt = (timestamp) => {
    const createdDate = moment(timestamp);
    return createdDate.format('MMM D');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleTabAndReverse = (tab) => {
    if (activeTab !== tab) {
      dispatch(reversePost(postList));
    }
  
    setActiveTab(tab);
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime;
  };

  const renderEmptyComponent = () => (
    <View style={{ alignItems: 'center' }}>
      <Text>Nothing Found</Text>
    </View>
  );

  return (
    <>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => handleTabAndReverse('Featured')}>
          <Text style={[styles.tab, activeTab === 'Featured' && styles.activeTab]}>
            Featured
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabAndReverse('Latest')}>
          <Text style={[styles.tab, activeTab === 'Latest' && styles.activeTab]}>
            Latest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Trending')}>
          <Text style={[styles.tab, activeTab === 'Trending' && styles.activeTab]}>
            Trending
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: '68%', paddingBottom: '10%' }}>
        {loadingComplete ? (
          <Animated.FlatList
            entering={FadeIn}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyComponent}
            data={postList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigateToBlog(item)}>
                <View style={styles.post}>
                  <View>
                    {item.image ? (
                      <Image style={styles.image} source={{ uri: item.image }} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={getRandomSampleImage(item)}
                      />
                    )}
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.postTtl}>
                      {truncateText(item.title, 20)}
                    </Text>
                    <Text style={styles.postBody}>{item.body}</Text>
                    <View style={{ flexDirection: 'row', marginTop : "5%" }}>
                      <Text style={styles.postDate}>
                        {formatCreatedAt(item.created_at)}
                      </Text>
                      <Text style={styles.readTime}>
                        {calculateReadingTime(item.body)} minute
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <LoadingAnimation />
        )}
      </View>
    </>
  );
};

export default PostList;