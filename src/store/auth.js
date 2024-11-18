import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../requests/requests";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: null,
    spotifyId: null,
    imageURL: null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("expire_epoch");

      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.imageURL = action.payload.imageURL;
      state.spotifyId = action.payload.spotifyId;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
