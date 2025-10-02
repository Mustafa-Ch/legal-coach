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
    <div className="min-h-screen w-full px-6 mx-auto">
      <div className="my-10 bg-[#F1F1F6] w-[100px] h-[28px] rounded-[10px] opacity-[1] flex items-center gap-x-3">
        <div className="w-[35px] h-[20px] flex justify-center items-center rounded-[12px] bg-[#C8D3FE]">
          <Image src={grid} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] tracking-[0%] align-middle text-[#120E14]">
          Process
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <h1 className="font-inter-tight text-[#2258C3] font-medium text-[32px] md:text-[45px] lg:text-[55px] leading-[100%] tracking-[0%]">
          MY LEGAL COACH <br />
          <span className="font-inter-tight font-medium text-[#000000] text-[32px] md:text-[45px] lg:text-[55px] leading-[100%] tracking-[0%]">
            How it Works Step by Step
          </span>
        </h1>
        <p className="font-inter-tight font-normal w-full lg:w-[23%] text-[12px] tracking-[0%] lg:text-right text-[#7585A3]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center mt-12 gap-8 lg:gap-0">
        {steps.map((data, idx) => (
          <div
            key={idx}
            className="w-[218.4px] h-[218.4px] bg-[#2258C3] shadow-[-5.6px_3.2px_3.2px_0px_#00000040] rounded-full flex flex-col pl-5 justify-center mx-auto"
          >
            <p className="font-inter-tight mb-3 font-light text-[14px] leading-[100%] text-white align-middle">
              {data.number}
            </p>
            <p className="font-inter-tight font-medium text-[20px] leading-[100%] text-white align-middle">
              {data.text}
            </p>
          </div>
        ))}
      </div>

      <div className="my-10 bg-[#F1F1F6] w-[120px] h-[28px] rounded-[10px] opacity-[1] flex items-center gap-x-3">
        <div className="w-[35px] h-[20px] flex justify-center items-center rounded-[12px] bg-[#C8D3FE]">
          <Image src={grid} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] tracking-[0%] align-middle text-[#120E14]">
          About Us
        </p>
      </div>

      <div>
        <h1 className="font-inter-tight font-normal text-[28px] md:text-[40px] lg:text-[54px] leading-[36px] md:leading-[50px] lg:leading-[60px] text-black">
          Bridging the Gap for Self-Represented Litigants <br />
          Our Commitment to Clarity, Fairness & Security
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center my-20 gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-x-20">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="font-inter-tight font-semibold text-[32px] md:text-[36px] lg:text-[40px] leading-[100%]">
              150M+
            </p>
            <p className="font-inter-tight font-light text-[16px] md:text-[18px] leading-[100%] text-[#808185]">
              Satisfied Families
            </p>
          </div>

          <div className="hidden lg:block w-0 h-[75px] border-l-2 border-transparent [border-image:linear-gradient(180deg,rgba(128,129,133,0.2)_0%,#808185_50%,rgba(128,129,133,0.2)_100%)_1]"></div>

          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="font-inter-tight font-semibold text-[32px] md:text-[36px] lg:text-[40px] leading-[100%]">
              18K +
            </p>
            <p className="font-inter-tight font-light text-[16px] md:text-[18px] leading-[100%] text-[#808185]">
              Cases Ongoing
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <p className="font-inter-tight font-normal text-[14px] leading-[20px] tracking-[0%] text-[#7585A3] text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div>
        <Advantages bottom="7" left="140px" w="220px" />
      </div>
    </div>
  );
};

export default page;
