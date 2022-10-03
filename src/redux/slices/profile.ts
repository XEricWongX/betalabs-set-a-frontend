import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/axios';
import type { RootState } from '../store'

// Define a type for the slice state
interface ProfileState {
    UserID: number;
    Email: string;
    Name: string;
    Phone: number;
    ProfilePicture: string;
    Company: string;
}

interface Email {
    Email: string;
}

// Define the initial state using that type
const initialState: ProfileState = {
    UserID: 0,
    Email: '',
    Name: '',
    Phone: 0,
    ProfilePicture: '',
    Company: ''
}

export const profileSlice = createSlice({
    name: 'profile',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        /* getterProfileAxi: async (state, action: PayloadAction<Email>) => {
            const profile = await axiosInstance.get(`/profile?email=${action.payload.Email}`);
            state.UserID = profile.data.UserID;
            state.Email = profile.data.Email;
            state.Name = profile.data.Name;
            state.Phone = profile.data.Phone;
            state.ProfilePicture = profile.data.ProfilePicture;
            state.Company = profile.data.Company;
        }, */
        // Use the PayloadAction type to declare the contents of `action.payload`
        setterProfile: (state, action: PayloadAction<ProfileState>) => {
            state.UserID = action.payload.UserID;
            state.Email = action.payload.Email;
            state.Name = action.payload.Name;
            state.Phone = action.payload.Phone;
            state.ProfilePicture = action.payload.ProfilePicture;
            state.Company = action.payload.Company;
        },
    },
})

export const { /* getterProfile, */ setterProfile } = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth

export const setProfile = async(email: string) => {
    const profile = await axiosInstance.get(`/profile?email=${email}`);
    /* dispatch(setterProfile(profile.data); */
}

export default profileSlice.reducer
