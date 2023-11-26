import axios from "axios";

let store 
export const injectStore = _store => {
    store = _store
}

const axiosInstance = axios.create({
    baseURL : 'https://ojt-api.bib-apps.com/api/',
    ContentType : 'application/json'
})

axiosInstance.interceptors.request.use((config) => {
    config = {...config, Authorization : 'Bearer ' + store.getState().user?.token}
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (e) => {
    console.log(e);
})

export default  axiosInstance