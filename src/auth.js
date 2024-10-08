import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient, createSessionClient } from "@/appwrite/appwrite";

const auth = {
    user: null,
    sessionCookie: null,
    getUser: async () => {
        auth.sessionCookie = cookies().get("session");
        try {
            const { account } = await createSessionClient(
                auth.sessionCookie.value
            );
            auth.user = await account.get();
        } catch {
            auth.user = null;
            auth.sessionCookie = null;
        }
        return auth.user;
    },

    createSession: async (formData) => {
        
        "use server";
        // try{
        const data = Object.fromEntries(formData);
        const { email, password } = data;
        const { account } = await createAdminClient();
        
        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        cookies().set("session", session.secret, {
            httpOnly: true,
            sameSite: "lax",
            secure: true,
            expires: new Date(session.expire),
            path: "/",
        });

        redirect("/admin");
        // return true;
    // } catch (error) {
    //     return false;
    // }
    },

    deleteSession: async () => {
        "use server";
        auth.sessionCookie = cookies().get("session");
        try {
            const { account } = await createSessionClient(
                auth.sessionCookie.value
            );
            await account.deleteSession("current");
        } catch (error) {}

        cookies().delete("session");
        auth.user = null;
        auth.sessionCookie = null;
        redirect("/login");
    },
};

export default auth;