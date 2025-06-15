import React from "react";
import Link from "next/link";
import { LogoutBtn } from "@/components/Clients";

const header = () => {
    return (
        <div className="header">
            <div>Todo.</div>
            <article>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                {/* <Link href={"/login"}>Login</Link> */}
                <LogoutBtn />
            </article>
        </div>
    );
};

export default header;
