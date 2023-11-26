import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './createPost.style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import Animated, { BounceInDown, Easing, FadeIn } from 'react-native-reanimated';
import postService from "../../services/postServices";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native';
import { formSchema } from './formhandler';
import ProgressBar from '../../animations/progressBar';

const CreatePost = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectImage, setSelectImage] = useState('')

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const FormSubmit = async (values, actions) => {
    let postData = {
      title: values.title,
      body: values.body,
    };
  
    try {
      setLoading(true);
      setModalVisible(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      const userInfo = await AsyncStorage.getItem('userInfo').then((res) => JSON.parse(res));
      await postService.createPost(userInfo.access_token, postData);
      setLoading(false);
    } catch (error) {
      console.error('Error creating blog post:', error);
      setLoading(false);
      Alert.alert('Error', 'Failed to create post. Please try again.');
    }
  };

  const closeModalAndNavigate = () => {
    setModalVisible(false);
    navigateToHome();
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: '10%', marginTop: "15%", }}>
          <Text style={styles.header}>Create Blog Post</Text>
          <TouchableOpacity onPress={toggleDrawer} style={styles.profile}>
            <Ionicons name='menu-outline' size={35} />
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={
            {
              title: "",
              body: "",
            }
          }
          onSubmit={(values, actions) => { FormSubmit(values, actions) }}
          onReset={(values) => { }}
          validationSchema={formSchema}
        >
          {(formikprops) => (
            <View>
              <Animated.View >
                  <TouchableOpacity style={styles.addImageBtn}>
                    <Ionicons name={'image-outline'} size={30}/>
                    <Text style ={{marginLeft : "5%", fontSize : 15}}>Add an image to your post</Text>
                  </TouchableOpacity>
              </Animated.View>

              <Animated.View>
                <Text>Your Post Title</Text>
                <TextInput
                  value={formikprops.values.title}
                  style={styles.titleInput}
                  placeholder='Title'
                  onChangeText={formikprops.handleChange('title')}
                />
                <Text style={{color : 'crimson',  marginBottom : "5%"}}>{formikprops.touched.title && formikprops.errors.title}</Text>
              </Animated.View>

              <Animated.View>
                <Text>Things you want to express</Text>
                <TextInput
                  value={formikprops.values.body}
                  style={styles.bodyInput}
                  multiline={true}
                  numberOfLines={23}
                  onChangeText={formikprops.handleChange('body')}
                />
                <Text style={{color : 'crimson'}}>{formikprops.touched.body && formikprops.errors.body}</Text>
              </Animated.View>

              <Animated.View entering={BounceInDown}>
                <TouchableOpacity style={styles.createBtn} onPress={() => {
                  setLoading(true);
                  formikprops.handleSubmit();
                }}>
                  <Ionicons name='arrow-up-circle-outline' color={"white"} style={styles.createIcon} size={30} />
                  <Text style={styles.createTxt}> Create </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          )}
        </Formik>
      </ScrollView>

      <Modal visible={modalVisible}>
          <View style={styles.modal}>
              <View style={styles.box}>
                { loading ? (
                  <ProgressBar />
                ) : (
                  <Animated.View style={styles.innerBox} entering={FadeIn.easing(Easing.ease)}>
                    <Text style={{ fontSize: 20, color: "green" }}>Your post has been posted! </Text>
                    <TouchableOpacity style={styles.btn} onPress={ closeModalAndNavigate}>
                      <Text style={{ color: 'white', textAlign : 'center' }}>To Home</Text>
                    </TouchableOpacity> 
                  </Animated.View>
                )}
              </View>
          </View>
        </Modal>

    </View>
  );
};

export default CreatePost;