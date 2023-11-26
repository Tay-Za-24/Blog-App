import axios from "axios";
import { setConfig } from "../util/helper";

export default class authService {
    static createUser = (userData) => {
        setConfig(); 
        return axios.post('users', userData);
    };

    static logInUser = (email, password) => {
        setConfig(); 
        return axios.post('auth/login', { email, password });
    }

    static logOutUser = (accessToken) => {
        setConfig(accessToken)
        return axios.post('auth/logout')
    }
    
    static checkUserTokenValid = (token) => {
        setConfig(token); 
        return axios.get('auth/me');
    }

    static getUserInfo = (accessToken) => {
        setConfig(accessToken);
        return axios.get('auth/me')
    }
    
}
