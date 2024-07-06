/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const defaultFunction = () => {
  throw new Error('Not implemented');
};

export const filterContext = createContext({
  filter: [],
  setFilter: defaultFunction,
});

export const useFilter = () => {
  const context = useContext(filterContext);
  return context;
};

export const FilterProvider = (props) => {
   const [filter, setFilter] = useState(() => {
    const storedFilter = JSON.parse(localStorage.getItem('filter')) || [];
    return storedFilter;
  });
  let values = {
    filter,
    setFilter,
  };

  return (
    <filterContext.Provider value={values}>
      {props.children}
    </filterContext.Provider>
  );
};