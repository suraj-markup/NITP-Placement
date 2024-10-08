import React from "react";
import Image from "next/image";
import Link from "next/link";
import BottomToTop from "./BottomToTop";
import { FaLinkedinIn,FaSquareXTwitter,FaGithub } from "react-icons/fa6";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      data-aos="fade-in"
      className="bg-[#09090b] text-sm w-[100%] mt-[10rem]"
    >
      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-[auto] items-start justify-items-center">
        <div className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1">
          <Link href="/">
            <Image
              src="/assets/logo.jfif"
              alt="NITP Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>

          <p className="max-w-[17rem] py-3 text-base text-gray-200">
            One-stop portal for placement of the National Institute of
            Technology, Patna, Bihar.
          </p>
          {/* <div className='flex gap-3 py-2 '>
            <a aria-label={"FaceBook"} href="https://facebook.com" style={{ color: 'blue' }} className='transition ease-in delay-50 text-blue-500 hover:text-blue-600 hover:scale-[110%]'>
              <FaFacebook size={30} />
            </a>
            <a aria-label={"WhatsApp"} href="https://web.whatsapp.com" style={{ color: '#00c000' }} className='transition ease-in delay-50 text-green-400 hover:text-green-500 hover:scale-[110%]'>
              <IoLogoWhatsapp size={30} />
            </a>
            <a aria-label={"Instagram"} href="https://instagram.com" style={{ color: "rgb(255, 105, 180)" }} className='transition ease-in delay-50 text-pink-500 hover:text-pink-600 hover:scale-[110%]'>
              <FaInstagram size={30} />
            </a>

          </div> */}
        </div>

        <div className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2">
          <div className="flex items-center justify-start">
            <h1 className="font-extrabold text-2xl text-yellow-600 mr-3">|</h1>
            <h1 className="text-lg font-semibold text-yellow-600">
              Useful Links
            </h1>
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-base">
            <li className=" hover:text-blue-600">
              <Link
                style={{ color: "white" }}
                href="https://www.nitp.ac.in/"
                target="_blank"
              >
                NIT Patna
              </Link>
            </li>
            <li className=" hover:text-blue-600">
              <Link
                style={{ color: "white" }}
                href="https://alumini-nitp.vercel.app/"
                target="_blank"
              >
                Alumni Portal
              </Link>
            </li>
            <li className=" hover:text-blue-600">
              <Link style={{ color: "white" }} href="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base text-white">
          <div className="flex items-center justify-start">
            <h1 className="font-extrabold text-2xl text-yellow-600  mr-3">|</h1>
            <h1 className="text-lg font-semibold text-yellow-600 ">
              Contact Us
            </h1>
          </div>
          <p className="max-w-[16rem] pt-4 text">Suraj Kumar</p>
          <div className="mt-2 flex flex-row flex-wrap gap-x-5"><Link href="https://www.linkedin.com/in/suraj-kumar-86217a20a/" target="_blank"><FaLinkedinIn/>
          </Link> 
          <Link href="https://x.com/suraj_markup" target="_blank">
          <FaSquareXTwitter/> 
          </Link>
          <Link href="https://github.com/suraj-markup" target="_blank">

          <FaGithub/> 
          </Link>
          </div>
          <p className="pt-2">
            Mail :{" "}
            <a
              href="mailto:alumni@nitp.ac.in"
              className="text-yellow-600  ml-2 font-semibold"
            >
              suraj.markup@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] py-7 text-gray-500 font-medium text-sm gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>© {year} Suraj Kumar, All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span className="md:block ">Made with ❤️ </span>
          <span>
            by{" "}
            <Link
              className="font-medium text-yellow-600 "
              href="https://github.com/suraj-markup"
              target="_blank"
            >
              Suraj Kumar
            </Link>
            .
          </span>
        </p>
      </div>

      <BottomToTop />
    </div>
  );
};

export default Footer;
