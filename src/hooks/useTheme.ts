import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { toggleTheme } from "../store/themeSlice.ts";

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTheme());

  return { theme, toggle };
};
