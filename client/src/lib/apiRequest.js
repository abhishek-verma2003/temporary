import axios from "axios";

const backend = import.meta.env.VITE_BACKEND_URL;
console.log("Backend URL:", backend);

const apiRequest = axios.create({
    baseURL: `${backend}api`, 
    withCredentials: true
});

export default apiRequest;
