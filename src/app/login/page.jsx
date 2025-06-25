"use client";

import React, { useState, useContext } from "react";
import { Context } from "@/components/Clients";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(Context);

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();

            if (!data.success) return toast.error(data.message);

            setUser(data.user);

            toast.success(data.message);
        } catch (error) {
            return toast.error(error);
        }
    };

    if (user && user._id) return redirect("/");


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
    description: "Login to continue",
};

export default page;
