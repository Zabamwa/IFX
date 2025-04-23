import { createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

const initialState: Theme = (localStorage.getItem("theme") as Theme) || "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
