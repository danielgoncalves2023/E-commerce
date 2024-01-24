import { createContext, useState, useEffect } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

const AppContext = createContext({} as IAppContext)
const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
const storage = getAllLocalStorage()

useEffect(() => {
    if(storage){
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [storage])

  // para testes
  const user = 'Daniel'
  
export const AppContextProvider = ({ children }: any) => {
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            { children }
        </AppContext.Provider>
    )
}