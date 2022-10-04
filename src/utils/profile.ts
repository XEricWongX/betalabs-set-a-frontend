import axiosInstance from "./axios";
import { ProfileDto } from "../type/profile.Dto";
import { setterProfile } from "../redux/slices/profile";

const GetProfile = async (email: string) => {
  return await axiosInstance.get(`/profile?email=${email}`);
}

type Props = {
  body: ProfileDto;
  onProfile: () => void;
  onProfileObj: (obj: ProfileDto) => void;
}

const UpdateProfile = async ({ body, onProfile, onProfileObj }: Props) => {
  console.log('Sending request: ', JSON.stringify(body))
  const signUp = await axiosInstance.post('/profile', body);
  if (signUp.data.code === 200) {
    console.log(signUp.data)
    console.log('update profile success');
    setterProfile(signUp.data);
    onProfileObj(
      {
        Email: signUp.data.res.Email,
        Name: signUp.data.res.Name,
        Phone: signUp.data.res.Phone,
        ProfilePicture: signUp.data.res.ProfilePicture,
        Company: signUp.data.res.Company,
      }
    );
    onProfile();
  } else {
    console.log('update fail ', signUp.data);
  }
}

export { GetProfile, UpdateProfile };
