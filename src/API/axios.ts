// setup axios
// to use, import axios from this module then just use specific endpoint on url
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3001/';
try {
  axios.defaults.headers.common = {};
} catch (err) {}
export default axios;
