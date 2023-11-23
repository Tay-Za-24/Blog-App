import axios from "axios";
import { apiUrl } from '../util/constant/constant';
import { setConfig } from "../util/helper";

export default class authService {
    static createUser = (userData) => {
        console.log('User data:', userData);
        setConfig(); 
        return axios.post(apiUrl + 'users', userData);
    };

    static logInUser = (email, password) => {
        setConfig(); 
        return axios.post(apiUrl + 'auth/login', { email, password });
    }
    
    static checkUserTokenValid = (token) => {
        setConfig(token); 
        return axios.get(apiUrl + 'auth/me');
    }

    static getUserInfo = (accessToken) => {
        setConfig(accessToken);
        return axios.get(apiUrl + 'auth/me')
    }
}
