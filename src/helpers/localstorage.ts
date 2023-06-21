const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};
const setLocalStorage = (key: string, value: any) => {
  const valueString = JSON.stringify(value);
  if (value) return localStorage.setItem(key, valueString);
  return null;
};

export { getLocalStorage, setLocalStorage };
