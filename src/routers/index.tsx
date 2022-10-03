import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../page/Home";
import Layout from "../page/Layout";
import SignInPage from "../page/SignIn";
import SignUpPage from "../page/SignUp";
import NoPage from "../page/NoPage";
import { useAppSelector } from '../hooks/reduxHooks'
import { useEffect } from "react";

export default function UseRouter() {
  const email = useAppSelector((state) => state.auth.Email);
  return (
    <BrowserRouter>
      {/* {email === '' ? <Navigate to="/signin" /> : <></>} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
