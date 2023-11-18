import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react';
import styles from './register.style'
import { Formik } from 'formik';
import authService from '../../services/authServices';
import * as yup from 'yup';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formSchema, FormSubmit } from './registerFormHandle';

const Register = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState(true);

    const navigateToLogIn = () =>{
        navigation.navigate('Log In');
    }

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
                            style={[styles.input, formikprops.touched.phoneNumber && formikprops.errors.phoneNumber ? styles.inputError : null]}
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