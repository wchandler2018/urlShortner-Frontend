import axios from 'axios';

// Create an axios instance with a base URL
// This base URL points to the backend server where the API is hosted
// The base URL is set to the Render.com deployment of the URL shortener service
export default axios.create({
    baseURL: `https://url-shortner-sb-1.onrender.com`,
})