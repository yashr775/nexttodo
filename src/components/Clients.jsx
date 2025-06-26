"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetch("/api/auth/me")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setUser(data.user);
            });
    }, []);
    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
            <Toaster />
        </Context.Provider>
    );
};

export const LogoutBtn = () => {
    const { user } = useContext(Context);

    const logoutHandeler = async () => {
        try {
            const res = await fetch("/api/auth/logout");

            const data = await res.json();

            if (!data.success) toast.error(data.message);

            setUser({});

            toast.success(data.message);
        } catch (error) {
            return toast.error(error);
        }
    };

    return user?._id ? (
        <button className="btn" onClick={logoutHandeler}>
            Logout
        </button>
    ) : (
        <Link href={"/login"}>Login</Link>
    );
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
