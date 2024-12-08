// axios instance in src/services/http.js
import axios from 'axios';
export default axios.create({
      baseURL: 'http://127.0.0.1:8000/api',  // Ensure this matches your Laravel API base URL
 // Ensure this matches your Laravel API base URL
   headers: {
     'Content-type': 'application/json',
  },
   
});
