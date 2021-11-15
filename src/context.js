import React, { useContext, useEffect, useState, useReducer } from 'react';
import reducer from './reducer';
import { companiesData } from './data.js';

const getStorageTheme = () => {
  let theme = localStorage.getItem('theme');
  if (theme) {
    return localStorage.getItem('theme');
  } else {
    return 'light';
  }
};

const initialState = {
  filters: { title: '', location: '', fulltime: false },
  all_companies: companiesData,
  filtered_companies: companiesData,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'fulltime') {
      value = e.target.checked;
    }
    dispatch({ type: 'UPDATE_FILTER', payload: [name, value] });
  };
  const handleSubmit = () => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleTheme,
        updateFilters,
        handleSubmit,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
//  const { handleSearch, query } = useGlobalContext()
