import { getLocalStorage } from "./localstorage";

const changeTheme: Function = (): void => {
  const localstorageDarkMode = getLocalStorage("darkMode");
  localstorageDarkMode === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
};

export default changeTheme;
