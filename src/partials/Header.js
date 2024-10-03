import React from "react";
import auth from "@/auth";

export default async function Header() {
    const user = await auth.getUser();
    return (
        <header>
            <>{user && <strong>Hello {user?.name || user.email}</strong>}</>

            <div>
                <form action={auth.deleteSession}>
                    <button className="bg-red-500 p-2 text-white">Logout</button>
                </form>
            </div>
        </header>
    );
}
