import React, { createContext, useState } from 'react';

// const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

export const AppContext = createContext({});

const AppContextProvider = (props) => {

    const [isLogin, setLogin] = useState(false);
    const [stepLogin, setStepLogin] = useState(false);
    const [ngoLogin, setNgoLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState(false);


  const contextValue = {
    isLogin,
    setLogin,
    stepLogin,
    setStepLogin,
    ngoLogin, 
    setNgoLogin,
    adminLogin, 
    setAdminLogin
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;