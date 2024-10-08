import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className="flex flex-row mb-10 rounded-xl w-10/12 m-auto justify-center bg-[#F3F3F3] px-10 py-16">

      
<div className="">
  <h1 className="text-5xl font-bold mb-2 text-center">
    About <span className='text-yellow-600'>Us</span>
  </h1>

  <p className="w-11/12 mt-5">
   This idea for this website came into existance when we the students of batch'25 were not able to get information about placement of last year like:
  
  </p> 
  <ul className='list-decimal ml-5'>
    <li>How many companies visited last year?</li>
    <li>A company was hiring how many students?</li>
    <li>What were the different roles for which companies visited?</li>
    <li>How many students were placed and in which companies?</li>
    <li>What was the CTC offered by different companies?</li>
  </ul>
  <br/>

<p>So, thinking about this issue we thought that as an engineer we should solve this issue so that in coming future no one should face this.</p>
<p>And this is how we build this website.</p>
  <p className="font-bold text-base my-5">
    Note: This is not the Official website by NIT Patna. The information being shown are taken from Linkedin of <Link href="https://www.linkedin.com/company/tpc-nit-patna/posts/?feedView=all" className="underline">
     TNP NIT Patna</Link> and are verified.
     <br/>
     This website is still in development phase so there might be some bugs. If you found them report them at <span className='text-lg text-yellow-700'> suraj.markup@gmail.com</span>

    </p>

</div>

{/* <div className="w-6/12 flex justify-center">
  <Image
    src="/assets/one.png"
    alt="landingphoto"
    width={400}
    height={500}
    className="rounded-3xl"
  />
</div> */}
</div>

    </div>
  )
}

export default page