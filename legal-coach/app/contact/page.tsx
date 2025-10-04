"use client";
import Image from "next/image";
import subtract from "../../public/imges/Rectangle 50.png";
import coach1 from "../../public/imges/Rectangle 51.png";
import coach3 from "../../public/imges/Rectangle 53.png";
import coach4 from "../../public/imges/Rectangle 54.png";
import coach5 from "../../public/imges/Subtract.png";
import giff from "../../public/imges/gif.gif";
import Marquee from "react-fast-marquee";
const Page = () => {
  return (
    <div className="min-h-[300px] sm:min-h-screen w-full bg-[#FFFFFF]">
      <div className="w-full flex justify-center items-center px-4 lg:px-0">
        <div className="w-[65%] sm:w-full md:w-[70%] lg:w-[90%] xl:w-[80%]  my-5 sm:my-10 lg:my-20">
          <h2 className="font-inter-tight font-medium text-[20px] sm:text-[50px] md:text-[70px] lg:text-[90px] leading-[24px] sm:leading-[54px] md:leading-[74px] lg:leading-[95px] text-center uppercase text-black flex flex-wrap items-center justify-center gap-1 lg:gap-0">
            <span className="hidden lg:inline-flex items-center px-5">
              <Image
                src={subtract}
                alt=""
                className="inline-block align-middle w-[50px] md:w-[100px] lg:w-[150px]"
              />
            </span>
            <span className="px-1">Questions</span>
            <span className="hidden lg:inline-flex items-center px-5">
              <Image
                src={coach1}
                alt=""
                className="inline-block align-middle w-[40px] md:w-[90px] lg:w-[120px]"
              />
            </span>
            <span className="px-1">About</span>
            <span className="hidden lg:inline-flex items-center px-3">
              <Image
                src={giff}
                alt=""
                className="inline-block align-middle h-[15px] w-[40px] md:h-[50px] md:w-[80px] lg:h-[60px] lg:w-[130px] rounded-full"
              />
            </span>
            <span className="px-1">My Legal</span>
            <span className="hidden lg:inline-flex items-center px-5">
              <Image
                src={coach3}
                alt=""
                className="inline-block align-middle w-[90px] md:w-[160px] lg:w-[260px]"
              />
            </span>
            <span className="px-1">Coach</span>
            <span className="hidden lg:inline-flex items-center px-5">
              <Image
                src={coach4}
                alt=""
                className="inline-block align-middle w-[90px] md:w-[160px] lg:w-[260px]"
              />
            </span>
          </h2>
        </div>
      </div>
      <div className="relative mt-4 sm:mt-10 lg:mt-10 mb-8 sm:mb-20 lg:mb-20 px-4 lg:px-0">
        <div className="w-full overflow-hidden">
          <Marquee gradient={false} direction="right" speed={800}>
            <div className="font-inter-tight font-semibold leading-none text-[40px] sm:text-[80px] lg:text-[170px] tracking-[0%] text-[#DFDFDF4F]">
              MY LEGAL COACH
            </div>
          </Marquee>
        </div>
        <Image
          src={coach5}
          alt=""
          className="absolute -top-8 sm:-top-16 lg:-top-30 z-10 left-1/2 lg:left-1/3 -translate-x-1/2 lg:translate-x-32 w-16 sm:w-24 lg:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Page;
