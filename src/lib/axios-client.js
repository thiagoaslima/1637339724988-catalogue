import axios from "axios";

// It could be an environment variable, 
// but set as a const for test brevity
const API_URL = 'http://localhost:8081';

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

export default axiosClient;
