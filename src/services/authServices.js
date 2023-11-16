import axios from "axios";
import {apiUrl} from '../util/constant/constant'

export default class authService {
    static createUser = (userData) => {
        console.log('User data:', userData);
        return axios.post(apiUrl + 'users' , userData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29qdC1hcGkuYmliLWFwcHMuY29tL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzAwMTQ3ODYyLCJleHAiOjE3MDAxNTE0NjIsIm5iZiI6MTcwMDE0Nzg2MiwianRpIjoib0ZidEZzb05VMzlhMXhmdSIsInN1YiI6IjY4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.koZDJdhJ34jsZbi44rveC1f7FD1GxJM_-5g3SaoHCOE`
          },
        })
      };
}