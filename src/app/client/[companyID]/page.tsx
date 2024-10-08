"use client";
import { useState, useEffect, useCallback } from "react";
import db from "../../../appwrite/databases";
import { Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

// Define Company and Student interfaces
interface Company {
  $id: string;
  company_name: string;
  CTC: string;
  job_type: string;
  company_logo?: string;
  desc:string;
  Roles:string;
}

interface Student {
  $id: string;
  student_name: string;
  branch?: string;
  linkedin_id?: string | null;
  companies: Company; // Correct the type of companies to be a Company object
  gender: string;
  offcampus: boolean;
}

const studentsData=[
  {
    $id: "1",
    student_name: "John Doe",
    branch: "CSE",
    linkedin_id: "johndoe",
    gender:"F",

    companies: {
      $id: "1",
      company_name: "Google",
      CTC: "₹1,00,000",
      job_type: "Full Time",
      company_logo:
          "https://cloud.appwrite.io/v1/storage/buckets/67043ebb003a3cfe5385/files/67043edd0028941d441b/view?project=66fc3cdf003e045ca11d&project=66fc3cdf003e045ca11d&mode=admin",
          desc: "Google is currently the first name that pops into your head when you enter the online world. Nearly everyone who uses the Internet is familiar with this word and uses it in various ways, yet relatively few people fully understand what Google is. In actuality, Google is a multinational technology corporation that offers users free services and goods relating to the Internet. Online ad techniques, cloud computing for search, software, hardware, etc., are all included in this service.",
      Roles: "Software Engineer"
    }
  },
  {
    $id: "2",
    student_name: "John Doe",
    branch: "CSE",
    linkedin_id: "johndoe",
    gender:"F",
    companies: {
      $id: "1",
      company_name: "Google",
      CTC: "₹1,00,000",
      job_type: "Full Time",
      company_logo:
          "https://cloud.appwrite.io/v1/storage/buckets/67043ebb003a3cfe5385/files/67043edd0028941d441b/view?project=66fc3cdf003e045ca11d&project=66fc3cdf003e045ca11d&mode=admin",
      desc: "Google is currently the first name that pops into your head when you enter the online world. Nearly everyone who uses the Internet is familiar with this word and uses it in various ways, yet relatively few people fully understand what Google is. In actuality, Google is a multinational technology corporation that offers users free services and goods relating to the Internet. Online ad techniques, cloud computing for search, software, hardware, etc., are all included in this service.",
      Roles: "Software Engineer,SDE"
    }
  },
  {
    $id: "3",
    student_name: "John Doe",
    branch: "CSE",
    linkedin_id: "johndoe",
    gender:"F",

    companies: {
      $id: "1",
      company_name: "Google",
      CTC: "₹1,00,000",
      job_type: "Full Time",
      company_logo:
          "https://cloud.appwrite.io/v1/storage/buckets/67043ebb003a3cfe5385/files/67043edd0028941d441b/view?project=66fc3cdf003e045ca11d&project=66fc3cdf003e045ca11d&mode=admin",
          desc: "Google is currently the first name that pops into your head when you enter the online world. Nearly everyone who uses the Internet is familiar with this word and uses it in various ways, yet relatively few people fully understand what Google is. In actuality, Google is a multinational technology corporation that offers users free services and goods relating to the Internet. Online ad techniques, cloud computing for search, software, hardware, etc., are all included in this service.",
      Roles: "Software Engineer"
    }
  },
];

const CompanyDetails = ({ params }: { params: { companyID: string } }) => {
  // const [studentsData, setStudentsData] = useState<Student[]>([]);
  const company=studentsData[0].companies;
  // Fetch the data with caching logic
  const init = useCallback(async () => {
    // const cachedData = localStorage.getItem('studentsData');
    // const parsedData = cachedData ? JSON.parse(cachedData) : null;
    // // console.log(parsedData);

    // // Check if cached data exists and if it corresponds to the current companyID
    // if (parsedData && parsedData.length > 0 && parsedData[0].companies.$id === params.companyID) {
    //   setStudentsData(parsedData);
    //   return; // If valid cached data is found, skip fetching
    // }

    // try {
    //   // Fetch data from the database
    //   const response = await db.students.list([Query.orderAsc('student_name')]);

    //   // Filter students by the company name matching the companyID from params
    //   const filteredStudents = response.documents.filter(
    //     (doc: Student) => doc.companies.$id === params.companyID
    //   );

    //   // Set the filtered students to the state and cache them
    //   setStudentsData(filteredStudents);
    //   localStorage.setItem('studentsData', JSON.stringify(filteredStudents));
    // } catch (error) {
    //   console.error("Failed to fetch company data:", error);
    // }
  }, [params.companyID]);

  // Load the data once when the component mounts
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="text-black h-auto">
      <div className="mx-10">
        <div className="w-11/12 m-auto  rounded-2xl  bg-[#F3F3F3] p-10 px-16">
          <h1 className="text-5xl text-center my-4">About <span className="text-yellow-600  font-bold">{company.company_name}</span></h1>
          <p className="my-2">{company.desc}</p>

          <p className="font-bold text-2xl mt-5">Placement Summary:-</p>
          <ul className="ml-5 mt-3 list-disc space-y-2">
          <li>No. of students hired: <span className="font-bold"> {studentsData.length}</span></li>
          <li>CTC: <span className="font-bold">{company.CTC}</span></li>
          <li>Role: <span className="font-bold">{company.Roles}</span></li>

          </ul>
          

        </div>

        <div className="w-11/12 m-auto  rounded-2xl  bg-[#F3F3F3] p-10 px-16 mt-5">
        <h1 className="text-5xl text-center my-8">Students <span className="text-yellow-600  font-bold">Placed</span></h1>
          <div className="flex flex-wrap justify-around items-center">
          {studentsData.length > 0 ? (
        studentsData.map((student) => (
          <>
          <div key={student.$id} className="rounded-2xl bg-white my-3 p-4 w-56 h-72">
            <div className="flex justify-center items-center mb-2">
              
          <Image
            src="/assets/profile.jpg"
            alt="profile image"
            width={180}
            height={180}
            className="rounded-full"
            />
            </div>
            <h3 >Name:<span className="font-bold" > {student.student_name} </span>({student.gender})</h3>
            <p className="text-sm">Department: {student.branch}</p>
            <p>{student.linkedin_id ? (<Link href={`${student.linkedin_id}`}> <FaLinkedinIn /> </Link>): " "}</p>
            {student.offcampus && <p>Off-campus</p>}
          </div>
          </>
        ))
      ) : (
        <p>Loading student data...</p>
      )}
          </div>
        </div>
      
        


      

    
      </div>

    </div>
  );
};

export default CompanyDetails;
