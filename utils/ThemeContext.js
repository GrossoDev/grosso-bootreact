import { createContext } from "react";

const ThemeContext = createContext({ actualTheme: "dark", theme: "auto", setTheme: () => {} });

export default ThemeContext;