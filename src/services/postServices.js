import axios from 'axios';
import { apiUrl } from '../util/constant/constant';

export default class postService {
    static getAllPosts = () => {
        return axios.get(apiUrl + 'blog-posts/all')
    }
}