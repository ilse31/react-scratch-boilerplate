import * as React from "react";
import { Outlet } from "react-router-dom";
import Button from "src/components/Button/Button";
import { getLocalStorage, setLocalStorage } from "src/helpers/localstorage";

type Props = {};

const DesignSystem = (props: Props) => {
  const [darkMode, setDarkMode] = React.useState("dark");

  const handleDarkMode = () => {
    darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
  };

  React.useEffect(() => {
    setLocalStorage("darkMode", darkMode);
    const localstorageDarkMode = getLocalStorage("darkMode");
    localstorageDarkMode === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className='bg-white dark:bg-slate-700 min-h-screen'>
      <div className='flex justify-center mb-5'>
        <Button size='lg' variant='indigo' onClick={handleDarkMode}>
          set dark mode to {darkMode}
        </Button>
      </div>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DesignSystem;
