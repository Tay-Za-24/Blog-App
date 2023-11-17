import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react';
import styles from './register.style'
import { Formik } from 'formik';
import authService from '../../services/authServices';
import * as yup from 'yup';
import { useState } from 'react';
import Ionicons from 'react-native-ionicons';

const Register = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const navigateToHome = () => {
        navigation.navigate('Home')
    }

    const navigateToLogIn = () =>{
        navigation.navigate('Log In');
    }

    const formSchema = yup.object({
        name: yup.string()
        .required()
        .min(4, 'Name must be at least 4 characters')
        .max(20, 'Name must be at most 20 characters'),
        //name validate
        email: yup.string()
        .required()
        .min(10, 'Email must be at least 10 characters')
        .max(24, 'Email must be at most 24 characters'),
        //email validate
        phoneNumber: yup.string()
        .required()
        .matches(/^[0-9]*$/, 'Only digits and no minus sign in this field'),
        //phoneNumber validate
        password: yup.string()
        .required()
        .min(8, 'Password must be at least 8 characters'),
        //password validate
        passwordConfirmation: yup.string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    const FormSubmit = async (values, actions) => {
        setLoading(true)
        let userData = {
            name : values.name,
            phone : values.phoneNumber,
            email : values.email,
            password : values.password,
            password_confirmation : values.passwordConfirmation,
        }
        console.log(userData);
        try {

            await authService.createUser(userData);
            navigateToLogIn();
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
                validationSchema={formSchema}
            >
                {(formikprops) => (
                    <View>
                        <TextInput 
                            style={[styles.input, formikprops.touched.name && formikprops.errors.name ? styles.inputError : null]}
                            placeholder='Username'
                            onChangeText={formikprops.handleChange('name')}
                            value={formikprops.values.name}
                        />
                        <Text style={styles.errorTxt}>{formikprops.touched.name && formikprops.errors.name}</Text>

                        <TextInput 
                            style={[styles.input, formikprops.touched.email && formikprops.errors.email ? styles.inputError : null]}
                            placeholder='Enter your Email'
                            onChangeText={formikprops.handleChange('email')}
                            value={formikprops.values.email}
                        />
                        <Text style={styles.errorTxt}>{formikprops.touched.email && formikprops.errors.email}</Text>

                        <TextInput 
                            style={[styles.input, formikprops.touched.phone && formikprops.errors.phoneNumber ? styles.inputError : null]}
                            placeholder='Enter your phone number'
                            onChangeText={formikprops.handleChange('phoneNumber')}
                            value={formikprops.values.phoneNumber}
                        />
                        <Text style={styles.errorTxt}>{formikprops.touched.phoneNumber && formikprops.errors.phoneNumber}</Text>

                        <View style={{flexDirection : 'row'}}>
                            <TextInput 
                            style={[styles.input, formikprops.touched.password && formikprops.errors.password ? styles.inputError : null]}
                            placeholder='Enter your Password'
                            onChangeText={formikprops.handleChange('password')}
                            value={formikprops.values.password}
                            secureTextEntry={passwordVisibility}
                            />
                            <TouchableOpacity onPress={setPasswordVisibility(true)}> 
                                <Ionicons name='eye-outline'/>
                            </TouchableOpacity> 
                        </View>
                        <Text style={styles.errorTxt}>{formikprops.touched.password && formikprops.errors.password}</Text>
                        {/* password input */}

                        <TextInput 
                            style={[styles.input, formikprops.touched.passwordConfirmation && formikprops.errors.passwordConfirmation ? styles.inputError : null]}
                            placeholder='Confirm Password'
                            onChangeText={formikprops.handleChange('passwordConfirmation')}
                            value={formikprops.values.passwordConfirmation}
                        />
                        <Text style={styles.errorTxt}>{formikprops.touched.passwordConfirmation && formikprops.errors.passwordConfirmation}</Text>

                        {loading ? (
                            <ActivityIndicator size="large" color="#000000" />
                        ) : (
                            <TouchableOpacity style={styles.registerBtn} onPress={formikprops.handleSubmit}>
                                <Text style={styles.registerBtnTxt}>Register</Text>
                            </TouchableOpacity>
                        )}

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