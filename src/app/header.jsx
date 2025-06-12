import React from "react";
import Link from "next/link";

const header = () => {
    return (
        <div className="header">
            <div>Todo.</div>
            <article>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/login"}>Login</Link>
            </article>
        </div>
    );
};

export default header;
