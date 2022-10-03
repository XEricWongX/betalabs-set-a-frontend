/* import jwtDecode from 'jwt-decode'; */
import axios from './axios';


//To-do check the token is valid
const isValidToken = () => {
};

//To-do handle token expired
const handleTokenExpired = () => {

};

//To-do remove store email and password, use token to verify
const setSession = (accessToken: string | null, accessEmail: string | null, accessPassword: string | null) => {
  console.log('accessToken: ', accessToken);
  console.log('accessEmail: ', accessEmail);
  console.log('accessPassword: ', accessPassword);
  console.log('setSession');
  if (accessToken && accessEmail && accessPassword) {
    console.log('all passs')
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('accessEmail', accessEmail);
    localStorage.setItem('accessPassword', accessPassword);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    //const { exp } = jwtDecode<{ exp: number }>(accessToken); // ~5 days by minimals server

    //handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { setSession };
