import axios from 'axios';
import { apiUrl } from '../util/constant/constant';
import { setConfig } from '../util/helper';

export default class postService {
    static getAllPosts = () => {
        setConfig(); 
        return axios.get(apiUrl + 'blog-posts/all')
    }

    static createPost = (accessToken, postData) => {
        setConfig(accessToken);
        return axios.post(apiUrl + 'blog-posts', postData);
      };
}