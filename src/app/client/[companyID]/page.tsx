"use client";
import { useState, useEffect,useCallback } from "react";
import db from "../../../appwrite/databases";
import {Query} from "appwrite";
// Define Company and Student interfaces
interface Company {
    $id:string;
  company_name: string;
  CTC: string;
  job_type: string;
  company_logo?: string;

}

interface Student {
  $id: string;
  student_name: string;
  branch?: string;
  linkedin_id?: string | null;
  companies: Company; // Correct the type of companies to be a Company object
  gender: string;
  offcampus:boolean;
}

const CompanyDetails = ({ params }: { params: { companyID: string } }) => {
  const [studentsData, setStudentsData] = useState<Student[]>([]);

  // Fetch the data
  const init = useCallback(async () => {
    try {
      // const response = await db.students.list( [Query.orderAsc('student_name')]);
      // // Filter students by the company name matching the companyID from params
      // console.log(response.documents);
      // console.log(params);

      // const filteredStudents = response.documents.filter(
      //   (doc: Student) => doc.companies.$id === params.companyID
      // );
      // console.log(filteredStudents);
      // setStudentsData(filteredStudents);
    } catch (error) {
      console.error("Failed to fetch company data:", error);
    }
  }, [params.companyID]);

  // Load the data once when the component mounts
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div>
      {studentsData.map((student) => (
        <div key={student.$id} className="border-2 border-solid border-red-600">
          <h2>{student.student_name}</h2>
          <p>{student.branch}</p>
          <p>{student.linkedin_id ? student.linkedin_id : ""}</p>
        {student.offcampus && (
            <p>Off-campus</p>
        )}

        
          
        </div>
      ))}
    </div>
  );
};

export default CompanyDetails;
