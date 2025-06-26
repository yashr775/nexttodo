import React from "react";
import Link from "next/link";
import { LogoutBtn } from "@/components/Clients";

const header = () => {
    return (
        <div className="header">
            <div>Todo.</div>
            <article>
                <Link href={"/"}>Home</Link>
                <Link href={"/profile"}>Profile</Link>

                <LogoutBtn />
            </article>
        </div>
    );
};

export default header;
