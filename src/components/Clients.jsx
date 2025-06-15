"use client"

import { createContext, useContext, useState } from "react";


const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState();




    return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}



export const LogoutBtn = () => {


    const { user } = useContext(Context);

    const logoutHandeler = () => {
        alert("Logged out")
    }

    return <button className="btn" onClick={logoutHandeler}>Logout</button>

} 