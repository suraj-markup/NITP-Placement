import { redirect } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import Header from "@/partials/Header";


export default async function Home() {
    const response = await axiosInstance({
        url: "http://localhost:3000/api/adminpage",
        method: "get",
    });
   
    const companies = response.data.data;
    
    // console.log(companies);

  
    return (
      <div className="p-6">
            <h1>Admin Dashboard</h1>
        
            <Header />
          
  
        <div className="grid grid-cols-3 gap-4 mt-8">
          {companies.length > 0 ? (
            companies.map((company) => (
              <div key={company.$id} className="border-2 border-solid border-gray-300 p-4">
                <h2>{company.company_name}</h2>
                <p>CTC: {company.CTC}</p>
                <p>Job Type: {company.job_type}</p>
              </div>
            ))
          ) : (
            <p>{ "Loading companies data..."}</p>
          )}
        </div>
      </div>
    );
}































// import axios from 'axios';
// import { useState, useEffect } from "react";
// // import { account } from "../../appwrite/appwrite"; // Import Appwrite instance
// import  db  from "../../appwrite/databases"; // Ensure correct import
// import { cookies } from 'next/headers';

// interface Company {
//   $id: string;
//   company_name: string;
//   CTC: string;
//   job_type: string;
// }

// const AdminDashboard = () => {
  
//  let company=[];
  
//   const [isLoading,setIsLoading]=useState<boolean>(false);
  
  
//   const sessionCookie=cookies().get('session');
//   const fetchCompanies = async () => {
//     if (sessionCookie) {
//       const response = await axios.get("http://localhost:3000/api/adminpage", {
//         headers: {
//           cookie: `session=${sessionCookie.value}`,
//         },
//       });
//       company=(response.data?.data);
//     } else {
//       return ("Session cookie is not available.");
//     }
    
//   };
//   const companies=company;
//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   // Handle logout
//   const handleLogout = async () => {
//     // try {
//     //   await account.deleteSession("current"); // Delete the current session
//     //   window.location.href = "/login"; // Redirect to login after logout
//     // } catch (error) {
//     //   console.error("Logout failed:", error);
//     // }
//   };

//   if(isLoading){
//     return <p>Loading...</p>
//   }

//   // return (
//   //   <div className="p-6">
//   //     <h1>Admin Dashboard</h1>
//   //     <button onClick={handleLogout} className="bg-red-500 p-2 text-white">
//   //       Logout
//   //     </button>

//   //     <div className="grid grid-cols-3 gap-4 mt-8">
//   //       {companies.length > 0 ? (
//   //         companies.map((company) => (
//   //           <div key={company.$id} className="border-2 border-solid border-gray-300 p-4">
//   //             <h2>{company.company_name}</h2>
//   //             <p>CTC: {company.CTC}</p>
//   //             <p>Job Type: {company.job_type}</p>
//   //           </div>
//   //         ))
//   //       ) : (
//   //         <p>{error || "Loading companies data..."}</p>
//   //       )}
//   //     </div>
//   //   </div>
//   // );
// };

// export default AdminDashboard;
