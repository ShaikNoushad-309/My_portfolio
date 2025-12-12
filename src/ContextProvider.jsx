import React, { useState} from 'react';
import {AppContext} from "./Context.jsx";

const ContextProvider = (props) => {

    const [darkMode, setDarkMode] = useState(true);

   const myValue = {darkMode, setDarkMode};

    return (
       <AppContext.Provider value={myValue}>
           {props.children}
       </AppContext.Provider>
    );
};

export default ContextProvider;