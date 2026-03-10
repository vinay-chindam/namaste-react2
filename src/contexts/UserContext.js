import { createContext, useState } from "react";


const UserContext=createContext()

export const UserProvider=({children})=>{

    const [userinfo,setUserInfo]=useState({
        name:"vinay",
        group:"ec",
        email:"abc@gmail.com",
    });

    

    return(
        <UserContext.Provider value={{userinfo,setUserInfo}}>
        {children}
    </UserContext.Provider>


    )

    

}

export default UserContext;