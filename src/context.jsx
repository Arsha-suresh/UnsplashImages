import { createContext, useContext, useState } from "react";


const AppContext = createContext();
export const AppProvider =({children})=>{
   // const greeting ="hello";
    const [isDarkTheme, setIsDarkTheme]= useState(false);
    const [searchTerm, setSearchTerm]= useState('');
    const toggleDarkTheme=()=>{
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        document.body.classList.toggle('dark-theme')
    };
    return <AppContext.Provider value={{isDarkTheme,toggleDarkTheme, setSearchTerm, searchTerm}}>{children}</AppContext.Provider>

}

export const useGlobalContext =()=> useContext(AppContext);