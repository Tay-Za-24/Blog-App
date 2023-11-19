import axios from "axios";
import {apiUrl} from '../util/constant/constant'
import { defaultApiConfig } from "../util/helper";

export default class authService {
    static createUser = (userData) => {
        console.log('User data:', userData);
        return axios.post(apiUrl + 'users' , userData,defaultApiConfig())
    };
    static logInUser = (email, password) => {
      return axios.post(apiUrl + 'auth/login', {email, password}, defaultApiConfig())
    }
    
    static checkUserTokenValid = (token) => {
      return axios.get(apiUrl + 'auth/me', defaultApiConfig(token))
    }
}