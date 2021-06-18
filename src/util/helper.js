import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export const localStorageUtil = {
  getAll: () => {
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    if(!blogs){
      return [];
    }
    return blogs;
  },

  add: blog => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    console.log(JSON.stringify(blogs))
    localStorage.setItem(
      'blogs',
      JSON.stringify([blog,...blogs]),
    );
  },

  addAll: blogsArray => {
    const blogs = localStorage.getItem('blogs') || [];
    localStorage.setItem(
      'blogs',
      JSON.stringify([...blogsArray, ...blogs]),
    );
  },
};

export { useDebounce };
