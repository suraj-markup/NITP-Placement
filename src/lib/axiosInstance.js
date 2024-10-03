import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";


const axiosInstance = async ({ url, method }) => {
    const sessionCookie = cookies().get("session");

    // Check if the session cookie exists
    if (!sessionCookie) {
        redirect("/login");
       
    }

    const headers = {
        Cookie: `session=${sessionCookie.value}`,
    };

    try {
        return await axios({
            url,
            method,
            headers,
        });
    } catch (error) {
        console.error("Error making request:", error);
        throw error;
    }
};

export default axiosInstance;
