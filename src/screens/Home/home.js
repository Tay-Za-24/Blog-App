import { View, Text, Button, TextInput, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import React, { useEffect } from 'react'
import styles from './home.style'
import { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostList from '../../component/postList';
import authService from '../../services/authServices';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('Latest');
  const [isModalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null)

  useEffect(() =>{
    getUser();
  }, [])

  const toggleDrawer = () => {
    navigation.toggleDrawer()
  }

  const navigateToLogIn = () =>{
    navigation.navigate("AuthStack");
  }

  const handleSearch = (newText) => {
      setText(newText)
  }

  const handleClearSeach = () => {
    setText('')
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getUser = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo').then((res) => JSON.parse(res));
      const response = await authService.getUserInfo(userInfo.access_token);
      setUserData(response.data);
    }catch( error ){
      console.error("Error Getting User infromation" , error)
      Alert.alert('Error', 'Failed to fetch user infromations');
    }
  }

  return (
      <View style={styles.mainContainer} >
        <View style={{flexDirection : 'row', marginBottom : '7%' , marginTop : "15%"}}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Ionicons name='menu-outline' size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile} onPress={() => setModalVisible(true)}>
            <Ionicons name='person-circle-outline' size={35}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection : 'row'}}>
          <TextInput 
          style={styles.searchBox}
          placeholder='Search' 
          value={text}
          onChangeText={handleSearch}
          />
          <Ionicons name='search-outline' size={20} style={styles.searchIcon}/>
          {text.length > 0 && (
            <TouchableOpacity style={styles.closeIcon} >
              <Ionicons name='close-outline' size={30} onPress={handleClearSeach} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => handleTabClick('Latest')}>
            <Text style={[styles.tab, activeTab === 'Latest' && styles.activeTab]}>
              Latest
            </Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Featured')}>
            <Text style={[styles.tab, activeTab === 'Featured' && styles.activeTab]}>
              Featured
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabClick('Trending')}>
            <Text style={[styles.tab, activeTab === 'Trending' && styles.activeTab]}>
              Trending
            </Text>
          </TouchableOpacity>
        </View>

        <PostList navigation={navigation} searchText={text}/> 


        <Modal visible={isModalVisible} transparent>
        <View style={styles.userInfo}>
          <View style={styles.infoBox}>
            {userData && (
              <>
                <View>
                <Ionicons name='person-circle-outline' size={45} style={{marginBottom : "5%"}}/>
                <Text style={styles.modalTxt}>Name : {userData.name}</Text>
                </View>
                <View style={{flexDirection : 'row'}}>
                  <Text style={styles.modalTxt}>Email : {userData.email}</Text>
                  {userData.email_verified_at ? (
                    <Text style={styles.emailCheck}>( Verified )</Text>
                      ) : (
                    <Text style={styles. emailNotVerified}>( Not Verified )</Text>
                  )}
                </View>
                <Text style={{fontSize : 16}}>Phone Number : {userData.phone}</Text>
              </>
            )}
            <View style={styles.btnContain}>
              <TouchableOpacity style={styles.logOutBtn} onPress={navigateToLogIn}>
                <Text style={{color : 'white'}}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnNothing} onPress={() => setModalVisible(false)}>
                <Text style={{color : 'white'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
  )
}

export default Home