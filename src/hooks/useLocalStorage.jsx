import { useEffect, useState } from 'react'


const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) {
      return initialValue;
    }
    let data;
    try {
      data = JSON.parse(jsonValue);
    } catch (error) {
      throw new Error('useLocalStorage could not parse JSON value');
    }

    return data;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

export default useLocalStorage;
