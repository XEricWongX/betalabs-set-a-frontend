import axiosInstance from "./axios";
import { ProfileDto } from "../type/profile.Dto";
import { setterProfile } from "../redux/slices/profile";

const GetProfile = async (email: string) => {
    return await axiosInstance.get(`/profile?email=${email}`);
}

type Props = {
    body: ProfileDto;
    onProfile: () => void;
}

const UpdateProfile = async ({ body, onProfile }: Props) => {
    console.log('Sending request: ', JSON.stringify(body))
    const signUp = await axiosInstance.post('/profile', body);
    if (signUp.data.code === 200) {
        console.log(signUp.data)
        console.log('login success');
        setterProfile(signUp.data)
        onProfile();
    } else {
        console.log('login fail ', signUp.data);
    }
    console.log('signIn: ', signUp.data.code);
}

export { GetProfile, UpdateProfile };
