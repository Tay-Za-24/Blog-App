import * as yup from 'yup';

export  const formSchema = yup.object({
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

  export const FormSubmit = async (values, actions) => {
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