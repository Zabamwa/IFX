import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle}>
      Change to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeToggle;
