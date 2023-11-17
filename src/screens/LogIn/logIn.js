import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react';
import styles from './logIn.style';
import { Formik } from 'formik';
import authService from '../../services/authServices';
import { AuthContext } from '../../hooks/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
import { useState } from 'react';
import Ionicons from 'react-native-ionicons';


const LogIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const authContext = useContext(AuthContext);

  const navigateToRegister = () =>{
    navigation.navigate('Register')
  }

  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  const handleRegisterPress = () => {
    setRegisterLoading(true);
    setTimeout(() => {
      setRegisterLoading(false); 
      navigateToRegister();
    }, 1000);
  };

  const formSchema = yup.object({
    email: yup.string()
    .required()
    .min(10, 'Email must be at least 10 characters')
    .max(24, 'Email must be at most 24 characters'),
    //email validate
    password: yup.string()
    .required()
    .min(8, 'Password must be at least 8 characters'),
    //password validate
  })

  const FormSubmit = async (values, actions) => {
    try {
      setLoading(true);
      const response = await authService.logInUser(values.email, values.password);
      authContext.setUserInfo(response.data);
      authContext.setTokenValid(true);
      AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
      navigateToHome();
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to log in. Please try again.');
    }finally {
      setLoading(false); 
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.intro}>Welcome From Our Blog App. Feel Free To Post Your Feelings With Us 🖤</Text>

        <Formik
          initialValues={{
            email : '', 
            password : '',
          }}
          onSubmit={(values, actions) => {FormSubmit(values, actions)}}
          validationSchema={formSchema}
        >
          {(formikprops) => (
            <View>
              <TextInput 
              style={[styles.input, formikprops.touched.email && formikprops.errors.email ? styles.inputError : null]}
              placeholder='Enter your Email'
              onChangeText={formikprops.handleChange('email')}
              value={formikprops.values.email}  
              />
              <Text style={styles.errorTxt}>{formikprops.touched.email && formikprops.errors.email}</Text>
              {/* emai input */}
            
              <View style={{flexDirection : 'row'}}>
                <TextInput 
                  style={[styles.input, formikprops.touched.password && formikprops.errors.password ? styles.inputError : null]}
                  placeholder='Enter your Password'
                  onChangeText={formikprops.handleChange('password')}
                  value={formikprops.values.password}
                  secureTextEntry={passwordVisibility}
                />
                <TouchableOpacity onPress={setPasswordVisibility(true)}> 
                  <Ionicons name='eye-outline' size={20}/>
                </TouchableOpacity> 
              </View>
              <Text style={styles.errorTxt}>{formikprops.touched.password && formikprops.errors.password}</Text>
              {/* password input */}

              {loading ? (
                <ActivityIndicator size="large" color="#000000" />
              ) : (
                <TouchableOpacity style={styles.logInBtn} onPress={formikprops.handleSubmit}>
                  <Text style={styles.logInBtnTxt}>Log In</Text>
                </TouchableOpacity>
              )}

              {registerLoading ? (
                <ActivityIndicator size="large" color="#000000" />
              ) : (
                <TouchableOpacity style={styles.registerBtn} onPress={handleRegisterPress}>
                  <Text style={styles.registerBtnTxt}>Register</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={navigateToHome}>
                <Text style={styles.guestBtn}>Continue as guest</Text>
              </TouchableOpacity>

            </View>
          )}

        </Formik>
      </ScrollView>
    </View>
  )
}

export default LogIn