"use client"
import React, { ReactNode,useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@nextui-org/progress";
import Link from "next/link";
import {
  Google,
  Ibm,
  Oracle,
  Microsoft,
  Samsung,
  Amazon,
  PhonePe,
  Accenture,
  JPMC,
  ICICI,
  Hitachi,
  GE,
  Cisco,
  BPCL,
  Visa,
  Paypal,
  TI
} from "./Components/svgs";

interface PageProps {
  children: ReactNode;
}

const branchData = [
  {
    branch: "CSE",
    value: 66,
  },
  {
    branch: "ECE",
    value: 66,
  },
  {
    branch: "EE",
    value: 66,
  },
  {
    branch: "ME",
    value: 66,
  },
  {
    branch: "CE",
    value: 66,
  },
];

const Page = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className=" text-black h-auto">
      <div className="flex flex-row mb-10 rounded-xl w-10/12 m-auto justify-center bg-gray-500 px-10 py-16">

      
        <div className="w-5/12">
          <h1 className="text-5xl font-bold mb-2">
            Connecting the Past, Empowering the Future
          </h1>

          <p className="w-11/12">
            Welcome to the NIT Patna Placement information website, a platform dedicated to providing you with the latest placement statistics and information about our students for batch 2025. Our students have consistently secured placements in top companies across various sectors, with competitive salary packages. We invite you to explore our website and learn more about our students, recruiters, and the opportunities that await you at NIT Patna.
          </p>

          <p className="font-bold text-base my-5">
            Note: This is not the Official website by NIT Patna. This is made by an individual to provide the students with the latest placement information about our students of batch 2025. The information being shown are taken from Linkedin of <Link href="https://www.linkedin.com/company/tpc-nit-patna/posts/?feedView=all" className="underline">
             TNP NIT Patna</Link> and are verified.
            </p>
          <p className="my-2">
            Interested to know who are our recruiters?{" "}
            <span className="text-white  bg-yellow-600 p-2 rounded-xl">
              <Link href="/client">Let&apos;s Goooo.</Link>
            </span>
          </p>
        </div>

        <div className="w-6/12 flex justify-center">
          <Image
            src="/assets/one.png"
            alt="landingphoto"
            width={400}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* Year wise Placement */}

      {/* <div className=" mb-10 rounded-xl w-10/12 m-auto justify-center bg-[#F3F3F3] px-10 py-16">
        <h1 className="text-5xl font-bold mb-2 text-center">
          Year Wise Placement <span className="text-yellow-600">Data...</span>{" "}
        </h1>
        <div>
          <p>Graph</p>
        </div>

        <div className="">
          <p>
            Batch 2022: 90% placement rate, with an average salary of ₹8 lakhs
            per annum
          </p>
          <p>
            Batch 2020: 80% placement rate, with an average salary of ₹6 lakhs
            per annum
          </p>
          <p>
            Batch 2021: 85% placement rate, with an average salary of ₹7 lakhs
            per annum
          </p>
        </div>
      </div> */}

      {/* Branch wise Placement */}

      <div className=" mb-10 rounded-xl w-10/12 m-auto justify-center bg-[#F3F3F3] px-10 py-16">
        <h1 className="text-5xl font-bold mb-2 text-center">
          Branch Wise Placement{" "}
          <span className="text-yellow-600">Till Now...</span>{" "}
        </h1>
        <h2 className="text-2xl text-center font-bold">(Batch 2025)</h2>

        <div className="flex flex-wrap flex-row justify-around items-center my-5">
          {branchData.map((branch) => (
            <>
              <div className="flex justify-center my-8">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-gray-700",
                    track: "stroke-white",
                    value: "text-3xl font-semibold text-gray-700",
                  }}
                  label={`${branch.branch}`}
                  size="lg"
                  value={branch.value}
                  color="primary"
                  formatOptions={{ style: "unit", unit: "percent" }}
                  showValueLabel={true}
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mb-10 rounded-xl w-10/12 m-auto justify-center bg-[#F3F3F3] px-10 py-16">
        <div className=" flex flex-col flex-wrap items-center">
          <h1 className="text-5xl font-bold mb-2 text-center">
            Our <span className="text-yellow-600">Recruiters...</span>{" "}
          </h1>
          <p className="text-center w-8/12 text-lg my-5">
            We take pride in our vibrant network of recruiters who consistently
            seek out and hire our talented students each year. Discover some of
            the top companies that actively recruit our students!
          </p>
        </div>
        <button 
        onClick={handleToggle}
        className="mt-8 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
              <div className="flex flex-col items-center mt-10 p-10">
      <div className="flex flex-wrap flex-row justify-evenly gap-x-24 gap-y-10 items-center">
        {/* Always show the first 5 companies */}
        <Google className="w-32 h-32" />
        <Ibm className="w-32 h-32" />
        <Microsoft className="w-32 h-32" />
        <Oracle className="w-32 h-32" />
        <Samsung className="w-32 h-32" />

        {/* Conditionally show the remaining companies when "showMore" is true */}
        {showMore && (
          <>
            <GE className="w-32 h-32" />
            <Accenture className="w-32 h-32" />
            <Amazon className="w-32 h-32" />
            <PhonePe className="w-32 h-32" />
            <Visa className="w-32 h-32" />
            <Paypal className="w-32 h-32" />
            <TI className="w-36 h-36" />
            <Image src="/assets/Tredence_Logo.jpg" alt="Tredence" width={128} height={128} />
            <ICICI className="w-32 h-32" />
            <JPMC className="w-32 h-32" />
            <Hitachi className="w-32 h-32" />
            <Cisco className="w-32 h-32" />
            <BPCL className="w-32 h-32" />
            <Image src="/assets/hpcl.png" alt="HPCL" width={128} height={128} />
            <Image src="/assets/axxela.jpg" alt="Axxela" width={128} height={128} />
            <Image src="/assets/ff.png" alt="FF" width={128} height={128} />
            <Image src="/assets/infoedgelogo.png" alt="InfoEdge" width={128} height={128} />
            <Image src="/assets/keysight.png" alt="Keysight" width={128} height={128} />
            <Image src="/assets/L&T.png" alt="L&T" width={128} height={128} />
          </>
        )}
      </div>
        
      
      
    </div>

        
      </div>
    </div>
  );
};

export default Page;
