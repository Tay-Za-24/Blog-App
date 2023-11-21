import axios from 'axios';

export const getRandomSampleImage = (item) => {
    const sampleImages = [
        require('../../assets/sampleImages/lily.png'),
        require('../../assets/sampleImages/berserk.png'),
        require('../../assets/sampleImages/sample.png'),
        require('../../assets/sampleImages/sample2.png'),
        require('../../assets/sampleImages/Tulip.jpg'),
      ]
    const randomIndex = item.id % 5;
    return sampleImages[randomIndex];
}

export const defaultApiConfig = (token = "") => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };
};

export const setConfig = (token) => {
  axios.defaults.baseURL = 'https://ojt-api.bib-apps.com/api/';
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
  axios.defaults.headers.post['Content-Type'] = 'application/json';
};
