import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type UserInfo = {
  id: number;
  name: string;
  email: string;
  // ... (다른 필드들)
};

type AuthState = {
  userToken: string | null;
  userInfo: UserInfo | null;
};

const initialState: AuthState = {
  userToken: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string | null>) => {
      state.userToken = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo | null>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserToken, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
