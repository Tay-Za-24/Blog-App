import axios from "axios";
import {apiUrl} from '../util/constant/constant'

export default class authService {
    static createUser = (userData) => {
        console.log('User data:', userData);
        return axios.post(apiUrl + 'users' , userData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
    };
    static logInUser = (email, password) => {
      return axios.post(apiUrl + 'auth/login', {email, password}, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    }   
}