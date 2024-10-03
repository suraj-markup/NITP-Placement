import auth from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const user = await auth.getUser();
    if (user) redirect("/admin");
    return (
        <div>
            <form action={auth.createSession} id="login-form">
                <h1 className="text-2xl">Login</h1>
                <p>Enter your information to create an account</p>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        defaultValue="sk9261712674@gmail.com"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        defaultValue="Qazwsxedc@123"
                    />
                </div>
                <div>
                    <input type="submit" value={"Login"} />
                </div>
            </form>
        </div>
    );
}