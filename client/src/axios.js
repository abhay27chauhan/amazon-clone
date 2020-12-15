import axios from 'axios';

const instance = axios.create({
    baseURL: "https://ac-amazon-back.herokuapp.com"
});

export default instance;