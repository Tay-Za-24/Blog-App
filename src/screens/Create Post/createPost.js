import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import React from 'react'
import styles from './createPost.style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import Animated, { BounceInDown } from 'react-native-reanimated';
import postService from "../../services/postServices";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePost = ({navigation}) => {

  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  const toggleDrawer = () => {
    navigation.toggleDrawer()
  }

  const FormSubmit = async (values, actions) => {
    let postData = {
      title: values.title,
      body: values.body,
    };
  
    try {
      const userInfo = await AsyncStorage.getItem('userInfo').then((res) => JSON.parse(res));
      await postService.createPost(userInfo.access_token ,postData);
      navigateToHome();
    } catch (error) {
      console.error('Error creating blog post:', error);
      Alert.alert('Error', 'Failed to create post. Please try again.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator = {false}>
      <View style={{flexDirection : 'row', marginBottom : '10%' , marginTop : "15%", }}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Ionicons name='menu-outline' size={35}/>
          </TouchableOpacity>
          <Text style={styles.header}>Create Blog Post</Text>
          <TouchableOpacity style={styles.profile}>
            <Ionicons name='person-circle-outline' size={35}/>
          </TouchableOpacity>
      </View>
      <Formik
        initialValues={
          {title : "",
            body : ""
          }
        }
        onSubmit = {(values, actions) => {FormSubmit(values, actions)}}
        onReset={(values) => { } }
      >
        {(formikprops) => (
          <View>
            <Animated.View>
              <Text>Your Post Title</Text>
              <TextInput 
                value={formikprops.values.title}
                style={styles.titleInput}
                placeholder='Title'
                onChangeText={formikprops.handleChange('title')}
              />
            </Animated.View>

            <Animated.View>
              <Text>Things you want to express</Text>
              <TextInput 
                value={formikprops.values.body}
                style={styles.bodyInput}
                multiline = {true}
                numberOfLines={23}
                onChangeText={formikprops.handleChange('body')}
              />
            </Animated.View>

            <Animated.View entering={BounceInDown}>
              <TouchableOpacity  style={styles.createBtn}  onPress={formikprops.handleSubmit} >
                <Ionicons name='arrow-up-circle-outline' color={"white"} style={styles.createIcon} size={30} />
                <Text style={styles.createTxt}> Create </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </Formik>
      </ScrollView>
    </View>
  )
}

export default CreatePost