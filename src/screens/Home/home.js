import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from './home.style'
import { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostList from '../../component/postList';


const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('Featured');

  const navigateToLogIn = () =>{
    navigation.navigate('Log In');
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

  return (
      <View style={styles.mainContainer} >
        <View style={{flexDirection : 'row', marginBottom : '7%' , marginTop : "15%"}}>
          <TouchableOpacity>
            <Ionicons name='menu-outline' size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile}>
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
        <TouchableOpacity onPress={() => handleTabClick('Featured')}>
            <Text style={[styles.tab, activeTab === 'Featured' && styles.activeTab]}>
              Featured
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabClick('Latest')}>
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

        <PostList navigation={navigation} />
      </View>
  )
}

export default Home