import { useState,createContext } from "react"

export const UserContext = createContext();

export const UserDataProvider = ({children}) => {
const [user,setUser] = useState({
    alluser:[],
    page:1, 
});

return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}