import { createContext, useState } from "react";
import { db } from "../database/users/users";

interface IAppContext {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    userLogged: string,
    setUserLogged: (userLogged: string) => void
}

  export const dataBaseUsers = db;

  export const AppContext = createContext({} as IAppContext)
  
  export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ userLogged, setUserLogged ] = useState<string>("");

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, userLogged, setUserLogged }}>
            { children }
        </AppContext.Provider>
    )
}