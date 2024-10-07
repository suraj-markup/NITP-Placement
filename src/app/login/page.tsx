import auth from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await auth.getUser();
  if (user){ redirect("/admin")};
  
  return (
    <div className="bg-red-400 flex items-center justify-center h-screen">
      <div className="bg-gray-600 w-4/12 h-3/4 p-5 flex flex-col justify-center">
        <form action={auth.createSession} className="px-10">
        <h1 className="text-4xl text-center">Admin Login</h1>
          
          <div className="flex flex-col my-5">
            <label className="text-lg font-bold">Email:-</label>
            <input
            className="p-2 rounded-xl my-2 text-black"
              type="email"
              name="email"
              placeholder="Enter your email..."
              // defaultValue="sk9261712674@gmail.com"
            />
          </div>
          <div className="flex flex-col my-5">
            <label className="text-lg font-bold">Password:</label>
            <input
            className="p-2 rounded-xl my-2 text-black"
              type="password"
              name="password"
              placeholder="Enter your password..."
              // defaultValue="Qazwsxedc@123"
            />
          </div>
          <div className="bg-blue-700 p-2 text-center rounded-xl hover:cursor-pointer">
            <input type="submit" value={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
}
