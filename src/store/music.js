import { createSelector, createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: { playlists: [], filter: "" },
  reducers: {
    upsertPlaylists: (state, action) => {
      state.playlists = [...action.payload.playlists];
    },
    removePlaylists: (state) => {
      state.playlists = [];
    },
    upsertFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const fetchFilteredPlaylists = createSelector((state) => {
  const { filter, playlists } = state.musicSlice;

  if (!filter || filter === "") return playlists;
  return playlists.filter((p) => p.startswith(filter));
});

export const { upsertPlaylists, removePlaylists, upsertFilter } =
  musicSlice.actions;
export default musicSlice.reducer;
