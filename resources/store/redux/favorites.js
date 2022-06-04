import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, actions) => {
      state.ids.push(actions.payload.id);
    },
    removeFavorite: (state, actions) => {
      state.ids.splice(state.ids.indexOf(actions.payload.id));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
