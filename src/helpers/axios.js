import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/ama-a8af2/us-central1/api'
    // "http://localhost:5001/ama-a8af2/us-central1/api",
});

export default instance;
