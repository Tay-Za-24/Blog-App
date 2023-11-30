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
