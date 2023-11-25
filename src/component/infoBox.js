
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import styles from '../screens/Home/home.style'; 
import Animated, { Easing, FadeIn  } from 'react-native-reanimated';

const InfoBox = ({ userData, navigateToLogIn, closeModal }) => {
  const formatCreatedAt = (timestamp) => {
    const createdDate = moment(timestamp);
    return createdDate.format('MMMM D, HH:mm:ss');
  };

  return (
    <Animated.View style={styles.infoBox} entering={FadeIn.easing(Easing.ease)}>
      {userData && (
        <>
          <View style={{flexDirection : 'row', marginBottom: '5%'}}>
            <Ionicons name='person-circle-outline' size={45} />
            <Text style={styles.name}>{userData.name}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.modalTxt}>Email : {userData.email}</Text>
            {userData.email_verified_at ? (
              <Text style={styles.emailCheck}>( Verified )</Text>
            ) : (
              <Text style={styles.emailNotVerified}>( Not Verified )</Text>
            )}
          </View>
          <Text style={styles.modalTxt}>Phone Number : {userData.phone}</Text>
          <Text style={{ fontSize: 16 }}>Account created at {formatCreatedAt(userData.created_at)}</Text>
        </>
      )}
      <View style={styles.btnContain}>
        <View style={{flexDirection : 'row'}}>
          <TouchableOpacity style={styles.logOutBtn} onPress={navigateToLogIn}>
            <Text style={{ color: 'white' }}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnNothing} onPress={closeModal}>
          <Text style={{ color: 'white' }}>OK</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default InfoBox;