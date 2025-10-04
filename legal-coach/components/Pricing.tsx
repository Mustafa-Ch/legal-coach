"use client";

import Image from "next/image";
import discount from "../public/imges/discount.png";
import { useState, useEffect } from "react";

const Pricing = () => {
  const plansData = [
    {
      id: 1,
      tag: "Trial",
      title: "Trial",
      price: 0,
      billingPeriod: "per month",
      description: "Get started with basic features to explore the platform",
      features: [
        { text: "Generate up to 5 legal documents" },
        { text: "Basic AI review" },
        { text: "Limited case tracking" },
        { text: "Email support" },
        { text: "Access to templates" },
        { text: "Community forum" },
        { text: "Basic onboarding" },
      ],
      isPopular: false,
    },
    {
      id: 2,
      tag: "Standard",
      title: "Standard",
      price: 175,
      billingPeriod: "per month",
      description: "Everything you need for most legal cases",
      features: [
        { text: "Generate unlimited legal documents" },
        { text: "File upload and AI review" },
        { text: "Case progress tracking" },
        { text: "Notification system" },
        { text: "Document drafting wizard" },
        { text: "All templates and checklists" },
        { text: "Priority support" },
      ],
      isPopular: true, // Most popular
    },
    {
      id: 3,
      tag: "Premium",
      title: "Premium",
      price: 299,
      billingPeriod: "per month",
      description: "Advanced features for large firms and professionals",
      features: [
        { text: "Everything in Standard" },
        { text: "Custom AI model tuning" },
        { text: "Team collaboration tools" },
        { text: "Dedicated account manager" },
        { text: "24/7 priority phone & email support" },
        { text: "Advanced analytics" },
        { text: "Exclusive legal resources" },
      ],
      isPopular: false,
    },
  ];

  const [plans] = useState(plansData);
  const [activePlan, setActivePlan] = useState(plansData[0].tag);

  const currentPlan = plans.find((p) => p.tag === activePlan);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Pricing Badge */}
      <div className="mt-10 p-1 w-[120px] h-[30px] rounded-[10px] flex items-center gap-x-4">
        <div className="bg-[#C8D3FE] w-[35px] h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={discount} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] text-[#120E14]">
          Pricing
        </p>
      </div>

      {/* Title */}
      <div className="mt-4">
        <h2 className="font-inter-tight font-normal text-[28px] sm:text-[40.47px] leading-[40px] sm:leading-[61.6px] text-center text-[#120E14]">
          Choose Your Legal Success Plan
        </h2>
      </div>

      {/* Card */}
      {currentPlan && (
        <div className="mt-8 w-full max-w-[950px] h-[600px] bg-[#F0F4FA] rounded-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] flex flex-col items-center py-6 sm:py-0">
          {/* Tabs */}
          <div className="w-full max-w-[400px] mt-6 sm:mt-10 h-[30px] rounded-[12px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)] bg-[#FEFEFE] flex items-center justify-around">
            {plans.map((plan) => (
              <span
                key={plan.id}
                onClick={() => setActivePlan(plan.tag)}
                className={`
                  cursor-pointer font-[Inter] font-medium text-[12px] leading-[22.4px] text-[#120E14]
                  flex items-center justify-center w-[100px] sm:w-[120px] h-[25px] rounded-[6px]
                  ${activePlan === plan.tag ? "bg-[#C8D3FE]" : "bg-transparent"}
                  transition-colors duration-300
                `}
              >
                {plan.tag}
              </span>
            ))}
          </div>

          {/* Most Popular */}
          {currentPlan.isPopular && (
            <button className="w-[150px] h-[35px] mt-10 sm:mt-14 bg-[#1A2B4D] text-white rounded-[27px] font-inter font-light text-[12px] cursor-pointer leading-[22.4px] flex items-center justify-center">
              Most Popular
            </button>
          )}

          {/* Middle Content */}
          <div className="flex-1 flex flex-col justify-between items-center w-full px-4">
            {/* Title + Price + Desc */}
            <div className="text-center">
              <h2 className="text-[#2258C3] font-inter-tight font-normal text-[32px] sm:text-[40.47px] mt-3 leading-[45px] sm:leading-[61.6px]">
                {currentPlan.title}
              </h2>
              <p className="font-inter-tight leading-[45px] sm:leading-[61.6px]">
                <span className="text-[22px] sm:text-[25px] font-semibold text-[#000000]">
                  ${currentPlan.price}
                </span>
                <span className="text-[22px] sm:text-[25px] font-normal text-[#000000]">
                  {" "}
                  /{" "}
                </span>
                <span className="text-[14px] sm:text-[16px] font-normal text-[#7585A3]">
                  {currentPlan.billingPeriod}
                </span>
              </p>
              <p className="font-inter-tight font-normal text-[13px] sm:text-[14px] leading-[100%] text-[#7585A3]">
                {currentPlan.description}
              </p>
            </div>

            {/* Features */}
            <div className="flex-1 flex items-center justify-center w-full">
              <ul
                className="
                  grid grid-cols-1 sm:grid-cols-2 
                  gap-y-5 sm:gap-y-7 gap-x-6 sm:gap-x-10 
                  list-disc 
                  pl-0 sm:pl-5 
                  justify-items-center sm:justify-items-start
                "
              >
                {currentPlan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="
                      font-inter-tight font-medium 
                      text-[13px] leading-[150%] text-[#0E1014] 
                      text-center sm:text-left
                    "
                  >
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="mb-6 w-full flex justify-center items-center">
              <button className="w-full sm:w-[600px] h-[25px] rounded-[29px] bg-[#2258C3] flex items-center justify-center cursor-pointer">
                <span className="text-white font-inter-tight font-normal text-[14px] sm:text-[16px] leading-[22.4px]">
                  Choose Plan
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Text */}
      <div className="flex flex-col gap-4 sm:gap-5 my-10 px-4">
        <p className="font-inter-tight font-normal text-[13px] leading-[150%] text-center text-[#7585A3]">
          All plans include watermarked documents, legal disclaimers, and secure
          file handling.
        </p>
        <p className="font-inter-tight font-normal text-[13px] leading-[150%] text-center text-[#7585A3]">
          Need a custom plan for your law firm or organization?{" "}
          <span className="underline underline-offset-[2px] font-inter-tight font-normal text-[#2258C3] text-[13px] leading-[150%]">
            Contact us for enterprise pricing
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
