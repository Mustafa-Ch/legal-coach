"use client";

import Image from "next/image";
import discount from "../public/imges/discount.png";
import { useState } from "react";

const Pricing = () => {
  const plans = ["Trial", "Standard", "Premium"];
  const [activePlan, setActivePlan] = useState("Trial");
  const features = [
    "Generate unlimited legal documents",
    "File upload and AI review",
    "Case progress tracking",
    "Notification system",
    "Document drafting wizard",
    "All templates and checklists",
    "Priority support",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="mt-10 bg-[#FFFFFF] p-1 w-[120px] h-[30px] rounded-[10px] flex items-center gap-x-4">
        <div className="bg-[#C8D3FE] w-[35px] h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={discount} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] text-[#120E14]">
          Pricing
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-inter-tight font-normal text-[40.47px] leading-[61.6px] text-center text-[#120E14]">
          Choose Your Legal Success Plan
        </h2>
      </div>

      <div className="mt-8 w-[950px] h-[600px] bg-[#F0F4FA] rounded-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] flex flex-col items-center">
        <div className="w-[400px] mt-10 h-[30px] rounded-[12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)] bg-[#FEFEFE] flex items-center justify-around ">
          {plans.map((plan) => (
            <span
              key={plan}
              onClick={() => setActivePlan(plan)}
              className={`
                cursor-pointer font-[Inter] font-medium text-[12px] leading-[22.4px] text-[#120E14] align-middle
                flex items-center justify-center w-[120px] h-[25px] rounded-[6px]
                ${activePlan === plan ? "bg-[#C8D3FE]" : "bg-transparent"}
                transition-colors duration-300
              `}
            >
              {plan}
            </span>
          ))}
        </div>
        <button
          className="w-[150px] h-[35px] mt-14 bg-[#1A2B4D] text-white rounded-[27px] 
             font-inter font-light text-[12px] cursor-pointer leading-[22.4px] flex items-center justify-center"
        >
          Most Popular
        </button>
        <h2
          className=" text-center text-[#2258C3] 
             font-inter-tight font-normal text-[40.47px] mt-3 leading-[61.6px]"
        >
          Standard
        </h2>
        <p className="text-center font-inter-tight leading-[61.6px]">
          <span className="text-[25px] font-semibold text-[#000000]">$175</span>
          <span className="text-[25px] font-normal text-[#000000]"> / </span>
          <span className="text-[16px] font-normal text-[#7585A3]">
            per month
          </span>
        </p>
        <p className="text-center font-inter-tight font-normal text-[14px] leading-[100%] text-[#7585A3]">
          Everything you need for most legal cases
        </p>
        <div className=" mt-10">
          <ul className="grid grid-cols-2 w-full gap-y-7 gap-x-10 justify-center items-center list-disc pl-5">
            {features.map((data, idx) => (
              <li
                key={idx}
                className="font-inter-tight font-medium text-[13px] leading-[100%] text-[#0E1014]"
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-[600px] h-[25px] mt-10 rounded-[29px] bg-[#2258C3]  py-[8px] flex items-center justify-center gap-[10px] cursor-pointer">
          <span className="text-white font-inter-tight font-normal text-[14px] leading-[22.4px]">
            Choose Plan
          </span>
        </button>
      </div>
      <div className="flex flex-col  gap-5 my-10">
        <p className="font-inter-tight font-normal text-[13px] leading-[100%] text-center text-[#7585A3]">
          All plans include watermarked documents, legal disclaimers, and secure
          file handling.
        </p>
        <p className="font-inter-tight font-normal text-[13px] leading-[100%] text-center text-[#7585A3]">
          Need a custom plan for your law firm or organization?{" "}
          <span className="underline underline-offset-[2px] font-inter-tight font-normal text-[#2258C3] text-[13px] leading-[100%]">
            Contact us for enterprise pricing
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
