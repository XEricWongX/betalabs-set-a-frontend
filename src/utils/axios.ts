import axios from "axios"
// config
import { HOST_API } from '../config';

/* const axiosInstance = () => {
    //建立一個自定義的axios
    const instance = _axios.create({
        baseURL: HOST_API || 'http://localhost:8080',
    });
    const abd =  HOST_API || 'http://localhost:8080';
     console.log('url: ', abd);
    return instance;
}

export { axiosInstance };
export default axiosInstance();
 */


// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

