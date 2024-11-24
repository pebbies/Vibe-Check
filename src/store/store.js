import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.js";
import musicReducer from "./music.js";

function loadFromLocal() {
  const priorToken = localStorage.getItem("access_token");
  const expireEpoch = localStorage.getItem("expire_epoch");
  const playlists = JSON.parse(localStorage.getItem("playlists")) ?? [];
  const isAuthenticated = !!priorToken && expireEpoch > Date.now();

  if (!isAuthenticated) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_epoch");
  }

  return {
    auth: { isAuthenticated },
    music: { playlists },
  };
}

const preloadedState = loadFromLocal();

const appReducers = combineReducers({
  auth: authReducer,
  music: musicReducer,
});

export const store = configureStore({
  reducer: appReducers,
  preloadedState,
});
