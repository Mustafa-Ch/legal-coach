'use client';
import Image from "next/image";
import subtract from "../../public/imges/Rectangle 50.png"
import coach1 from "../../public/imges/Rectangle 51.png"
import coach2 from "../../public/imges/Rectangle 52.png"
import coach3 from "../../public/imges/Rectangle 53.png"
import coach4 from "../../public/imges/Rectangle 54.png"
import coach5 from "../../public/imges/Subtract.png"
import giff from "../../public/imges/gif.gif"
import Marquee from "react-fast-marquee";
const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
<div className="w-full flex justify-center items-center">
  <div className="w-[70%] ">
  <h2 className="font-inter-tight font-medium text-[90px] leading-[95px] text-center uppercase text-black">
    <span className="px-5">
      <Image src={subtract} alt="" className="inline-block align-middle w-[150px]" />
    </span>
    Questions 
    <span className="px-5">
      <Image src={coach1} alt="" className="inline-block align-middle w-[120px]" />
    </span> 
    About
    <span className="px-3">
      <Image src={giff} alt="" className="inline-block align-middle h-[60px] w-[130px] rounded-full" />
    </span> 
    My Legal 
    <span className="px-5">
      <Image src={coach3} alt="" className="inline-block align-middle w-[260px]" />
    </span>
    Coach
    <span className="px-5">
      <Image src={coach4} alt="" className="inline-block align-middle w-[260px]" />
    </span>
  </h2>
</div>
</div> 
<div className="relative mt-32">
 <div className="w-full overflow-hidden">
          <Marquee gradient={false} speed={120}>
            <div className="font-inter-tight font-semibold leading-none text-[170px]   tracking-[0%] text-[#DFDFDF4F]">
              MY LEGAL COACH
            </div>
          </Marquee>
        </div>
        <Image src={coach5} alt="" className="absolute -top-30 z-10 left-1/3 translate-x-32 w-[200px]"/>
</div>


    </div>
  )
}

export default Page
