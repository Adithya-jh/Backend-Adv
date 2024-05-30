// debouncing is -> controlling in how much time the req should hit the backend
// import axios from 'axios';
import { useEffect, useState } from 'react';

export function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return debouncedValue;
}
