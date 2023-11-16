import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react';
import styles from './register.style'
import { Formik } from 'formik';
import authService from '../../services/authServices';

const Register = ({navigation}) => {

    const navigateToHome = () => {
        navigation.navigate('Home')
    }

    const navigateToLogIn = () =>{
        navigation.navigate('Log In');
    }

    const validateInputs = (values) => {
        const fields = ['name', 'email', 'phoneNumber', 'password', 'passwordConfirmation'];

        for (const field of fields) {
        if (!values[field].trim()) {
            return false;
        }
        }
        return true;
    };

    const FormSubmit = async (values, actions) => {
        if (!validateInputs(values)) {
          Alert.alert('Error', 'Please provide input in every field.');
          return;
        }
        let userData = {
            name : values.name,
            phoneNumber : values.phoneNumber,
            email : values.email,
            password : values.password,
            passwordConfirmation : values.passwordConfirmation,
        }
        console.log(userData);
        try {
            if (values.password !== values.passwordConfirmation) {
                Alert.alert('Error', 'Passwords do not match.');
                return;
            }

            await authService.createUser(userData);
            console.log('User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
            Alert.alert('Error', 'Failed to create user. Please try again.');
        }
        };

  return (
    <View style={styles.mainContainer}>
        <ScrollView>
            <Text style={styles.intro}>Welcome From Our Blog App. Feel Free To Post Your Feelings With Us 🖤</Text>

            <Formik
                initialValues={
                    {name : '', 
                    email : '', 
                    phoneNumber : '',
                    password : '',
                    passwordConfirmation : '',
                    }}
                onSubmit={(values, actions) => {FormSubmit(values, actions)}}
                onReset={(values) => { } }
            >
                {(formikprops) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Username'
                            onChangeText={formikprops.handleChange('name')}
                            value={formikprops.values.name}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Enter your Email'
                            onChangeText={formikprops.handleChange('email')}
                            value={formikprops.values.email}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Enter your phone number'
                            onChangeText={formikprops.handleChange('phoneNumber')}
                            value={formikprops.values.phoneNumber}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter your Password'
                            onChangeText={formikprops.handleChange('password')}
                            value={formikprops.values.password}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Confirm Password'
                            onChangeText={formikprops.handleChange('passwordConfirmation')}
                            value={formikprops.values.passwordConfirmation}
                        />

                        <TouchableOpacity style={styles.registerBtn} onPress={formikprops.handleSubmit}>
                            <Text style={styles.registerBtnTxt}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToLogIn}>
                            <Text style={styles.toLogIn}>Already have an account?</Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>    
        </ScrollView>
    </View>
  )
}

export default Register