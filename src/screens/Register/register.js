import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react';
import styles from './register.style'
import { Formik } from 'formik';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formSchema } from './registerFormHandle';
import Animated, {
    Easing,
    FadeInUp,
    BounceInDown,
    BounceInUp
  } from 'react-native-reanimated';
import authService from '../../services/authServices';

const Register = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState(true);

    const navigateToLogIn = () =>{
        navigation.navigate('Login');
    }

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
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.intro}>Register Here 🤍</Text>
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
                            <Animated.View entering={FadeInUp.delay(200).easing(Easing.ease)}>
                                <TextInput 
                                    style={[styles.input, formikprops.touched.name && formikprops.errors.name ? styles.inputError : null]}
                                    placeholder='Username'
                                    onChangeText={formikprops.handleChange('name')}
                                    value={formikprops.values.name}
                                />
                                <Text style={styles.errorTxt}>{formikprops.touched.name && formikprops.errors.name}</Text>
                            </Animated.View>

                            <Animated.View entering={FadeInUp.delay(300).easing(Easing.ease)}>
                                <TextInput 
                                    style={[styles.input, formikprops.touched.email && formikprops.errors.email ? styles.inputError : null]}
                                    placeholder='Enter your Email'
                                    onChangeText={formikprops.handleChange('email')}
                                    value={formikprops.values.email}
                                />
                                <Text style={styles.errorTxt}>{formikprops.touched.email && formikprops.errors.email}</Text>
                            </Animated.View>

                            <Animated.View entering={FadeInUp.delay(400).easing(Easing.ease)}>
                                <TextInput 
                                    style={[styles.input, formikprops.touched.phoneNumber && formikprops.errors.phoneNumber ? styles.inputError : null]}
                                    placeholder='Enter your phone number'
                                    onChangeText={formikprops.handleChange('phoneNumber')}
                                    value={formikprops.values.phoneNumber}
                                />
                                <Text style={styles.errorTxt}>{formikprops.touched.phoneNumber && formikprops.errors.phoneNumber}</Text>
                            </Animated.View>

                            <Animated.View entering={FadeInUp.delay(500).easing(Easing.ease)}>
                                <View style={{flexDirection : 'row'}}>
                                    <TextInput 
                                    style={[styles.input, formikprops.touched.password && formikprops.errors.password ? styles.inputError : null]}
                                    placeholder='Enter your Password'
                                    onChangeText={formikprops.handleChange('password')}
                                    value={formikprops.values.password}
                                    secureTextEntry={passwordVisibility}
                                    />
                                    {formikprops.values.password.length > 0 && (
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: '5%', top: '20%' }}
                                        onPress={() => setPasswordVisibility(!passwordVisibility)}
                                    >
                                        <Ionicons name={passwordVisibility ? 'eye-outline' : 'eye-off-outline'} size={30} />
                                    </TouchableOpacity>
                                    )}
                                </View>
                                <Text style={styles.errorTxt}>{formikprops.touched.password && formikprops.errors.password}</Text>
                                {/* password input */}
                            </Animated.View>
                            
                            <Animated.View entering={FadeInUp.delay(600).easing(Easing.ease)}>
                                <View style={{flexDirection : 'row'}}>
                                    <TextInput 
                                        style={[styles.input, formikprops.touched.passwordConfirmation && formikprops.errors.passwordConfirmation ? styles.inputError : null]}
                                        placeholder='Confirm Password'
                                        onChangeText={formikprops.handleChange('passwordConfirmation')}
                                        value={formikprops.values.passwordConfirmation}
                                        secureTextEntry={passwordConfirmVisibility}
                                    />
                                    {formikprops.values.passwordConfirmation.length > 0 && (
                                    <TouchableOpacity
                                        style={{ position: 'absolute', right: '5%', top: '20%' }}
                                        onPress={() => setPasswordConfirmVisibility(!passwordConfirmVisibility)}
                                    >
                                        <Ionicons name={passwordConfirmVisibility ? 'eye-outline' : 'eye-off-outline'} size={30} />
                                    </TouchableOpacity>
                                    )}
                                </View>
                                <Text style={styles.errorTxt}>{formikprops.touched.passwordConfirmation && formikprops.errors.passwordConfirmation}</Text>
                            </Animated.View>

                            {loading ? (
                                <ActivityIndicator size="large" color="#84a59d" />
                            ) : (
                                <Animated.View entering={ BounceInUp.delay(700).easing(Easing.ease)} >
                                    <TouchableOpacity style={[styles.registerBtn]} onPress={formikprops.handleSubmit}>
                                        <Text style={styles.registerBtnTxt}>Register</Text>
                                    </TouchableOpacity>
                                </Animated.View>
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