"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <Context.Provider value={{ user, setUser }}>{children}<Toaster /></Context.Provider>
    );
};

export const LogoutBtn = () => {
    const { user } = useContext(Context);

    const logoutHandeler = () => {
        alert("Logged out");
    };

    return user._id ? (
        <button className="btn" onClick={logoutHandeler}>
            Logout
        </button>
    ) : (<Link href={"/login"}>Login</Link>)
};

export const TodoButton = ({ id, completed }) => {
    const deleteHandler = (id) => {
        alert(`Deleting ${id}`);
    };

    return (
        <>
            <input type="checkbox" checked={completed}></input>
            <button className="btn" onClick={() => deleteHandler(id)}>
                Delete
            </button>
        </>
    );
};
