import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from '../page/Home';
// utils
import axios from '../utils/axios';
import { setSession } from '../utils/jwt';

// hooks
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { setterAuth } from '../redux/slices/auth';
import { AuthDto } from '../type/auth.Dto';
import { setterProfile } from '../redux/slices/profile';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {

    const handleRes = async (email: string) => {
      const response =  axios.get(`profile?email=${email}`);
      dispatch(setterProfile((await response).data));
;      /* const { user } = response.data;
      console.log("#####" + user); */
    }

    try {
      const accessToken = localStorage.getItem('accessToken');
      const accessEmail = localStorage.getItem('accessEmail');
      const accessPassword = localStorage.getItem('accessPassword');
      console.log('abc', accessToken, accessEmail, accessPassword);

      if (accessToken && accessEmail && accessPassword) {
        setSession(accessToken, accessEmail, accessEmail);
        dispatch(setterAuth({ Email: accessEmail, Password: accessPassword }));
        //handleRes(accessEmail);

      } else {
        //To-do Clear state when token expire
        dispatch(setterAuth({ Email: '', Password: '' }));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const logout = async () => {
    setSession(null, '', '');
  };

  return (
    <>
      {children}
    </>
  );
}

