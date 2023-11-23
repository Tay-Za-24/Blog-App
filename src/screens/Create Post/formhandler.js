import * as yup from 'yup';


export  const formSchema = yup.object({
    title : yup.string().required('Please provide title for your post'),
    body : yup.string().required('Provide the body of the post')
})