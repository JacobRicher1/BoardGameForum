import { createContext } from "react"
import {useState} from "react"


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [searched, setSearched]= useState("");

    return (
        <UserContext.Provider value={{searched, setSearched}}>
            {children}
            </UserContext.Provider>
    )

}
