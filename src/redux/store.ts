import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import profile from './slices/profile'
// ...

export const store = configureStore({
  reducer: {
    auth: auth,
    profile: profile
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
