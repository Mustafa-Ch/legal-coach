"use client";
import Advantages from "@/components/Advantages";
import grid from "../../public/imges/grid.png";
import Image from "next/image";

const page = () => {
  const steps = [
    { number: "01", text: "Sign Up & Start Free Trial" },
    { number: "02", text: "Choose Your Legal Goal" },
    { number: "03", text: "Answer Plain-Language Questions" },
    { number: "04", text: "Generate & Review Documents" },
    { number: "05", text: "Stay Organized with Checklists" },
    { number: "06", text: "Get 24/7 AI Support" },
  ];

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-9 mx-auto">
      <div className="my-6 sm:my-10 bg-[#F1F1F6] w-[90px] sm:w-[100px] h-[24px] sm:h-[28px] rounded-[10px] flex items-center gap-x-2 sm:gap-x-3">
        <div className="w-[25px] sm:w-[35px] h-[16px] sm:h-[20px] flex justify-center items-center rounded-[12px] bg-[#C8D3FE]">
          <Image src={grid} alt="alt" className="w-[12px] sm:w-auto h-auto" />
        </div>
        <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[20px] sm:leading-[22.4px] text-[#120E14]">
          Process
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-6 lg:gap-y-0">
        <h1 className="font-inter-tight text-[#2258C3] font-medium text-[28px] sm:text-[40px] md:text-[50px] lg:text-[55px] leading-[100%] tracking-[0%]">
          MY LEGAL COACH <br />
          <span className="font-inter-tight font-medium text-[#000000] text-[28px] sm:text-[40px] md:text-[50px] lg:text-[55px] leading-[100%] tracking-[0%]">
            How it Works Step by Step
          </span>
        </h1>
        <p className="font-inter-tight font-normal w-full lg:w-[23%] text-[10px] sm:text-[12px] md:text-[12px]  text-[#7585A3] text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 sm:mt-16 lg:mt-24 justify-items-center">
        {steps.map((data, idx) => (
          <div
            key={idx}
            className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[218.4px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[218.4px] bg-[#2258C3] shadow-[-5.6px_3.2px_3.2px_0px_#00000040] rounded-full flex flex-col pl-4 sm:pl-5 justify-center"
          >
            <p className="font-inter-tight mb-2 sm:mb-3 font-light text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-[100%] text-white">
              {data.number}
            </p>
            <p className="font-inter-tight font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[100%] text-white">
              {data.text}
            </p>
          </div>
        ))}
      </div>

      <div className="my-6 sm:my-10 bg-[#F1F1F6] w-[100px] sm:w-[120px] h-[24px] sm:h-[28px] rounded-[10px] flex items-center gap-x-2 sm:gap-x-3">
        <div className="w-[25px] sm:w-[35px] h-[16px] sm:h-[20px] flex justify-center items-center rounded-[12px] bg-[#C8D3FE]">
          <Image src={grid} alt="alt" className="w-[12px] sm:w-auto h-auto" />
        </div>
        <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[20px] sm:leading-[22.4px] text-[#120E14]">
          About Us
        </p>
      </div>

      <div>
        <h1 className="font-inter-tight font-normal text-[28px] sm:text-[36px] md:text-[45px] lg:text-[54px] leading-[32px] sm:leading-[42px] md:leading-[50px] lg:leading-[60px] text-black">
          Bridging the Gap for Self-Represented Litigants <br />
          Our Commitment to Clarity, Fairness & Security
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center my-12 sm:my-16 lg:my-20 gap-y-6 lg:gap-y-0">
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col gap-1">
            <p className="font-inter-tight font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[100%]">
              150M+
            </p>
            <p className="font-inter-tight font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] text-[#808185]">
              Satisfied Families
            </p>
          </div>
          <div className="w-0 h-[50px] sm:h-[60px] md:h-[70px] lg:h-[75px] border-l-2 border-transparent [border-image:linear-gradient(180deg,rgba(128,129,133,0.2)_0%,#808185_50%,rgba(128,129,133,0.2)_100%)_1]"></div>
          <div className="flex flex-col gap-1">
            <p className="font-inter-tight font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[100%]">
              18K+
            </p>
            <p className="font-inter-tight font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] text-[#808185]">
              Cases Ongoing
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%] mt-4 lg:mt-0">
          <p className="font-inter-tight font-normal text-[12px] sm:text-[14px] md:text-[14px] leading-[18px]  sm:leading-[20px] md:leading-[20px] text-[#7585A3]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <Advantages bottom={10} left={32} w="225px" />
    </div>
  );
};

export default page;
