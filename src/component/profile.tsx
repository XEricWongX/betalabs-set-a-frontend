import { Box } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { setterProfile } from "../redux/slices/profile";
import { ProfileDto } from "../type/profile.Dto";
import axiosInstance from "../utils/axios";
import { GetProfile } from "../utils/profile";
import ProfileForm from "./profileForm";
import ProfilePreview from "./profilePreview";

const Profile = () => {
  const [profileBoolean, setProfileBoolean] = useState<boolean>(false);
  const [profileObj, setProfileObj] = useState<ProfileDto>();

  const auth = useAppSelector(state => state.auth);
  const profile = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const getProfile = GetProfile(auth.Email);

  useEffect(() => {
    const getProfile = async () => {
      const res = await axiosInstance.get(`/profile?email=${auth.Email}`);
      console.log('abc haha: ', JSON.stringify(res.data))
    }
    getProfile();
  }, [profile])

  
  /* const profileObj = async () => {
    const profile = await axiosInstance.get(`/profile?email=${auth.Email}`);
    dispatch(setterProfile(profile.data))
  } */

  const handleProfile = () => {
    setProfileBoolean(profileBoolean ? false : true);
  }

  if (profile.UserID !== 0) setProfileBoolean(true);


  return (
    <Box>
      {(profileBoolean) ?
        <>
          <ProfileForm
            Email={auth.Email}
            Name={profile.Name}
            Phone={profile.Phone}
            ProfilePicture={profile.ProfilePicture}
            Company={profile.Company}
            onProfile={handleProfile}
          />
        </>
        :
        <>
          <ProfilePreview
            Email={auth.Email}
            Name={profile.Name}
            Phone={profile.Phone}
            ProfilePicture={profile.ProfilePicture}
            Company={profile.Company}
            onProfile={handleProfile}
          />
        </>}
    </Box>
  )
}

export default Profile;
