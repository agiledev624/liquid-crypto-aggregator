import { useEffect, useState } from 'react';

const useIsNightMode = () => {
  const key = 'theme';
  const light = 'light';
  const dark = 'dark';
  let theme = dark;
  if (localStorage) {
    try {
      theme = localStorage.getItem(key);
    } catch (e) {}
  }
  const [isNightMode, setNightMode] = useState(true /*theme === dark*/);

  useEffect(() => {
    try {
      localStorage.setItem(key, isNightMode ? dark : light);
    } catch (e) {}
  }, [isNightMode]);

  return { isNightMode, setNightMode };
};

export default useIsNightMode;
