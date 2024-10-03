"use client";
import Image from "next/image";
import { useRouter } from 'next/router'
import  db  from "../../appwrite/databases";
import { useState, useEffect } from "react";
import Link from "next/link";
import {Query} from 'appwrite';

interface Company {
  $id: string;
  company_name: string;
  company_logo?: string;
  CTC?: string;
  job_type:string;
}

export default function Home() {
  const [companyData, setCompanyData] = useState<Company[]>([]);
  // const router = useRouter();
  const init = async () => {
    // if (!DATABASE_ID || !COMPANIES_COLLECTION_ID) {
    //   console.error("Missing Appwrite configuration");
    //   return;
    // }
    try {
    //   const response = await db.companies.list([Query.orderAsc('company_name')]);
    //   console.log(response.documents);
    //   setCompanyData(response.documents);

    } catch (error) {
      console.error("Failed to fetch company data:", error);
    }
  };

  useEffect(() => {
    init();
  }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {companyData.length > 0 ? (
        companyData.map((company) => (
          <div key={company.$id} className="border-2 border-solid border-red-600">
            <Image
              src="/fallback-image.jpg" // Fallback image if no company logo is provided
              alt={`${company.company_name} logo`} // Proper alt description for the image
              width={100}
              height={100}
              aria-hidden="false"
              quality={75} // Optional: Optimize image loading
            />
            <h2>{company.company_name}</h2>
           <Link href={`client/${company.$id}`}> <p>{company.CTC || "CTC not available"}</p></Link> 
           <p>{company.job_type || "job not available"}</p>
          </div>
        ))
      ) : (
        <p>Loading company data...</p>
      )}
    </div>
  );
}
