import  axios from './defaultAxiosConfig';

export default class postService {
    static getAllPosts = () => {
        return axios.get('blog-posts/all')
    }

    static createPost = (accessToken, postData) => {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        return axios.post('blog-posts', postData, config);
      };
}