import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AuthState {
    Email: string;
    Password: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    Email: '',
    Password: '',
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        getterAuth: (state) => {
            return state
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setterAuth: (state, action: PayloadAction<AuthState>) => {
            state.Email = action.payload.Email;
            state.Password = action.payload.Password;
        },
    },
})

export const { getterAuth, setterAuth } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth

export default authSlice.reducer
