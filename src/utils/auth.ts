import { AccessDto } from "../type/auth.Dto";
import axiosInstance from "./axios";
import { setSession } from "./jwt";
// hooks
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { setterAuth } from '../redux/slices/auth';

const SignUpRes = async (body: AccessDto) => {
  //const dispatch = useAppDispatch()
  const signUp = await axiosInstance.post('/auth/sign-up', body);
  console.log('haha: ', signUp.data)
  if (signUp.data.code === 200) {
    console.log('login success');
    setSession(signUp.data.access_token, body.Email, body.Password);
    //dispatch(setterAuth({ Email: body.Email, Password: body.Password }));
  } else {
    console.log('login fail ', signUp.data);
  }
  console.log('signIn: ', signUp.data.code);
}

const SignInRes = async (body: AccessDto) => {
  //const dispatch = useAppDispatch()
  const signIn = await axiosInstance.post('/auth/sign-in', body);

  if (signIn.data.code === 200) {
    console.log('login success');
    setSession(signIn.data.access_token, body.Email, body.Password);
    //dispatch(setterAuth({ Email: body.Email, Password: body.Password }));
  } else {
    console.log('login fail');
  }
}

const SignOut = () => {
  setSession('', '', '')
}

export { SignUpRes, SignInRes, SignOut };
