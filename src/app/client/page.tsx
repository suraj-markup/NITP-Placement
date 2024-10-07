"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import db from "../../appwrite/databases";
import { Query } from "appwrite";
import { DATABASE_ID, COMPANIES_COLLECTION_ID } from "../../appwrite/appwrite";
import { MdSearch } from "react-icons/md";


interface Company {
  $id: string;
  company_name: string;
  company_logo?: string;
  CTC?: string;
  job_type: string;
}

const companyData = [
  {
    $id: "1",
    company_name: "Google",
    company_logo:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "2",
    company_name: "Microsoft",
    company_logo:
      "https://www.microsoft.com/en-us/brand/siteassets/images/home/logo_microsoft.svg",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "3",
    company_name: "Facebook",
    company_logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "4",
    company_name: "Apple",
    company_logo:
     "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106221039",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "5",
    company_name: "Amazon",
    company_logo:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "6",
    company_name: "Tesla",
    company_logo: "/assets/amazon.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "7",
    company_name: "Twitter",
    company_logo:"/assets/amazon.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "8",
    company_name: "LinkedIn",
    company_logo: "/assets/amazon.png",
    CTC: "₹1,00,000",
    job_type: "Full Time",
  },
  {
    $id: "9",
    company_name: "Instagram",
    company_logo: "/assets/amazon.png",
    CTC: "₹1,00,000",
    job_type: "6M Intern",
  },
];

export default function Home() {
  const [searchvalue,setSearchValue] = useState<string>('');
  // const [companyData, setCompanyData] = useState<Company[]>([]);
  const [newData,setNewData] = useState<Company[]>(companyData);
  const router = useRouter();

  const init = async () => {
    // if (!DATABASE_ID || !COMPANIES_COLLECTION_ID) {
    //   console.error("Missing Appwrite configuration");
    //   return;
    // }
    // // Check if data exists in localStorage
    // const cachedTime= localStorage.getItem('companyTime');
    // const cachedData = localStorage.getItem('companyData');
    // const currentTime=new Date().getTime();
    // if (cachedData && cachedTime && (currentTime - Number(cachedTime) < 900000) ){
    //   setCompanyData(JSON.parse(cachedData));
    //   return; // Skip fetching from database
    // }
    // try {
    //   const response = await db.companies.list([Query.orderAsc('company_name')]);
    //   console.log(response.documents);
    //   setCompanyData(response.documents);
          // setNewData(companyData);
    //   // Cache the data in localStorage
    //   localStorage.setItem('companyData', JSON.stringify(response.documents));
    //   localStorage.setItem('companyTime', currentTime.toString());
    // } catch (error) {
    //   console.error("Failed to fetch company data:", error);
    // }
  };
  const handleSearch=() => {
    const filteredData=companyData.filter((company)=>company.company_name.toLowerCase().includes(searchvalue.toLowerCase()));
    if(searchvalue.length===0){
      setNewData(companyData);
      // console.log(companyData);
    }
    else{
      setNewData(filteredData);
    }
    
  };

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value);
    handleSearch();
  };

  useEffect(() => {
    init();
  }, [newData]);

  return (
    <div className="h-auto text-black ">
      <div className="flex flex-wrap flex-col items-center justify-center w-8/12 m-auto">
        <h1 className="font-bold text-5xl my-5">Our Recruiters</h1>
        <p className="text-center w-8/12 text-lg mb-5">
        We take pride in our vibrant network of recruiters who consistently seek out and hire our talented students each year. Discover some of the top companies that actively recruit our students!
        </p>
        <div className="w-9/12 p-5 flex justify-between m-auto rounded-xl gap-x-2 bg-[#F3F3F3] my-5">

        <input type="search" placeholder="Search here ... "value={searchvalue}  onChange={handleChange} className=" bg-[#F3F3F3] border-b-[#D8D8D8] border-b-2 border-solid w-10/12 p-1"/>
        <button className="bg-[#D8D8D8] p-2 rounded-xl w-24" onClick={handleSearch}>
        Search
        </button>
        </div>

        <div className="flex flex-wrap flex-row p-5 m-auto justify-center">
        {newData.length > 0 ? (
          newData.map((company) => (
            <>
              <Link href={`client/${company.$id}`}>
            <div key={company.$id} className="flex flex-col justify-center  bg-[#D8D8D8] px-5  rounded-2xl m-5  w-56 h-72">
              <div className="h-2/3 flex items-center justify-center">

              <Image
                src={ company.company_logo||''} // Use actual logo if available
                alt={`${company.company_name} logo`}
                width={170}
                height={170}
                aria-hidden="false"
                quality={75}
                className="align-center   mx-auto"
                
                />
                </div>
                <div className="">
              <h2 className="font-bold text-lg">{company.company_name}</h2>
               
              <p>{company.job_type || "Job type not available"}</p>
                  </div>
            </div>
              </Link>
            </>
          ))
        ) : (
          <p>Loading company data...</p>
        )}
      </div>
      </div>
    </div>
  );
}
