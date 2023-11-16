import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import styles from './logIn.style';
import { Formik } from 'formik';


const LogIn = ({navigation}) => {

  const navigateToRegister = () =>{
    navigation.navigate('Register')
  }

  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  const validateInputs = (values) => {
    const fields = ['email', 'password']

    for (const field of fields) {
      if (!values[field].trim()){
        return false;
      }
    }
    return true;

  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.intro}>Welcome From Our Blog App. Feel Free To Post Your Feelings With Us 🖤</Text>

      <Formik
        initialValues={{
          email : '', 
          password : '',
        }}
        onSubmit={(values) => {
          if (validateInputs(values)) {
            navigateToHome();
          } else {
            Alert.alert('Error', 'Please provide input in every field.');
          }
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput 
             style={styles.input}
             placeholder='Enter your Email'
             onChangeText={formikprops.handleChange('email')}
             value={formikprops.values.email}  
            />

            <TextInput 
              style={styles.input}
              placeholder='Enter your Password'
              onChangeText={formikprops.handleChange('password')}
              value={formikprops.values.password}
            />

            <TouchableOpacity style={styles.logInBtn} onPress={formikprops.handleSubmit}>
              <Text style={styles.logInBtnTxt}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerBtn} onPress={navigateToRegister}>
              <Text style={styles.registerBtnTxt}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToHome}>
              <Text style={styles.guestBtn}>Continue as guest</Text>
            </TouchableOpacity>

          </View>
        )}

      </Formik>
    </View>
  )
}

export default LogIn