"use client"

import React, { useState, useContext } from "react";
import { Context } from "@/components/Clients";
import Link from "next/link";

const page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(Context);


    const loginHandler = () => {

    }


    return (
        <div className="login">
            <section>
                <form onSubmit={loginHandler}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                    />
                    <button type="submit">Login</button>

                    <p>OR</p>
                    <Link href={"/register"}>New User</Link>
                </form>
            </section>
        </div>
    );
};

const metadata = {
    title: "Login page",

}

export default page;
