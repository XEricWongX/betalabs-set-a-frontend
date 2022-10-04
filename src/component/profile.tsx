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
  const [profileObj, setProfileObj] = useState<ProfileDto>(
    {
      Email: '',
      Name: '',
      Phone: 0,
      ProfilePicture: '',
      Company: '',
    }
  );

  const auth = useAppSelector(state => state.auth);
  const profile = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const getProfile = GetProfile(auth.Email);
  console.log('before: ', profileObj);

  useEffect(() => {
    const getProfile = async () => {
      const res = await axiosInstance.get(`/profile?email=${auth.Email}`);
      console.log('abc haha: ', JSON.stringify(res.data.res));
      setProfileObj(
        {
          Email: res.data.res.Email,
          Name: res.data.res.Name,
          Phone: res.data.res.Phone,
          ProfilePicture: res.data.res.ProfilePicture,
          Company: res.data.res.Company,
        }
      );
      /* dispatch(setterProfile(res.data)); */
      console.log('after: ', profileObj)
    }
    getProfile();
  }, [profile])


  /* const profileObj = async () => {
    const profile = await axiosInstance.get(`/profile?email=${auth.Email}`);
    dispatch(setterProfile(profile.data))
  } */

  const handleProfileObj = (obj: ProfileDto)=> {
    setProfileObj(obj);
  }

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
            Name={profileObj.Name}
            Phone={profileObj.Phone}
            ProfilePicture={profileObj.ProfilePicture}
            Company={profileObj.Company}
            onProfile={handleProfile}
            onProfileObj={setProfileObj}
          />
        </>
        :
        <>
          <ProfilePreview
            Email={auth.Email}
            Name={profileObj.Name}
            Phone={profileObj.Phone}
            ProfilePicture={profileObj.ProfilePicture}
            Company={profileObj.Company}
            onProfile={handleProfile}
          />
        </>}
    </Box>
  )
}

export default Profile;
