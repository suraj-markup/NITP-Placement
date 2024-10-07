import React, { ReactNode } from "react";
import Image from "next/image";
import Link  from "next/link";
interface PageProps {
  children: ReactNode;
}

const page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="bg-white text-black h-auto">
      

      <div className="flex flex-row mb-10 rounded-xl w-10/12 m-auto justify-center bg-[#F3F3F3] px-10 py-16">
        <div className="w-5/12">
          <h1 className="text-5xl font-bold mb-2">Connecting the Past, Empowering the Future</h1>
          <h5 className="font-bold text-base my-2">NIT Patna Alumni: Where Memories Meet Opportunities</h5>

          <p className="w-11/12">
            Welcome to the NIT Patna Alumni page, a platform that connects our
            esteemed alumni with the college and with each other. Our alumni
            community is a vibrant and diverse group of individuals who have
            made a significant impact in their respective fields. We are proud
            to provide a space for our alumni to reconnect, network, and give
            back to the college that has given them so much.
          </p>
          <p className="my-2">
           Interested to know more about our recruiters? <span className="text-yellow-600"><Link href="/client">Let&apos;s Goooo.</Link></span> 
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

      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
      <p>landing page</p>
    </div>
  );
};

export default page;
