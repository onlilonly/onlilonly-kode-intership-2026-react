import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

interface ThemeState {
  theme: ThemeType;
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const initialState: ThemeState = {
  theme: systemTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;