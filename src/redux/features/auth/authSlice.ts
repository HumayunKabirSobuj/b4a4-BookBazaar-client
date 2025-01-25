import { createSlice } from "@reduxjs/toolkit";


export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};


const initialState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
});


export default authSlice.reducer;