import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [value, setValue] = useState(null)

        console.log( "children in UserContextProvider" ,{children})
    return (
        <UserContext.Provider value={{user, setUser, setValue}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

