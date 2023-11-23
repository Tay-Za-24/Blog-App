import * as yup from 'yup';

export const formSchema = yup.object({
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
