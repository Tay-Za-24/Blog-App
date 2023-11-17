import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

  const navigateToLogIn = () =>{
    navigation.navigate('Log In');
}

  return (
    <View>
      <Text>home</Text>
      <Button title='Log out' onPress={navigateToLogIn}/>
    </View>
  )
}

export default Home