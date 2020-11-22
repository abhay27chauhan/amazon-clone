import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.PORT}/clone-d2f64/us-central1/api` // the API (cloud function) url
});

export default instance;