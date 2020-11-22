import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ac-amazon-clone.herokuapp.com/' // the API (cloud function) url
});

export default instance;