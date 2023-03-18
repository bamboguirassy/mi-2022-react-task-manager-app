import React, { createContext, useContext } from "react";

const UserContext = createContext(null);

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export default UserContext;