import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DarkModeState = {
  darkMode: boolean;
};

const initialState: DarkModeState = {
  darkMode: true,
};

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.darkMode = action.payload;
    },
  },
});
export const darkModeReducer = DarkModeSlice.reducer;
export const { setDarkMode } = DarkModeSlice.actions;
