"use client";
import Image from "next/image";
import assistant from "../public/imges/assistantImage.png";
import person from "../public/imges/person.png";
import sms from "../public/imges/sms.png";
import line from "../public/imges/line.png";
import phone from "../public/imges/call.png";

const Auth = () => {
  const formFields = [
    { fieldName: "Enter Your First Name", fieldSvg: person },
    { fieldName: "Enter Your Last Name", fieldSvg: person },
    { fieldName: "Enter Your Phone Number", fieldSvg: phone },
    { fieldName: "Enter Your Email Address", fieldSvg: sms },
    { fieldName: "Enter Your Project Brief", fieldSvg: line },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/imges/authbg.png')" }}
    >
      <div className="w-full min-h-screen flex justify-center items-center px-4">
        <div className="bg-[#1A2B4D] opacity-100 w-full max-w-[1100px] h-auto lg:h-[650px] p-5 mx-auto rounded-[20px] flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10">
          <div
            className="h-full w-full p-6 md:p-10 justify-between relative flex flex-col bg-cover bg-center rounded-[20px] text-center lg:text-left"
            style={{ backgroundImage: "url('/imges/authbg.png')" }}
          >
            <h1 className="font-inter-tight font-black text-[50px] md:text-[90px] lg:text-[120.68px] leading-[100%] text-white">
              MLC
            </h1>
            <Image
              src={assistant}
              alt="alt"
              className="hidden md:block w-[220px] md:w-[280px] lg:w-[350px] h-auto absolute top-10 md:top-10 lg:top-28 md:-right-5 lg:-right-10"
            />
            <h2 className="font-inter-tight font-semibold text-[24px] md:text-[40px] lg:text-[50.83px] text-white leading-tight md:leading-[50px] lg:leading-[60px] uppercase mt-6 md:mt-0">
              Perform <br /> Like a <br />
              <span className="font-light uppercase">Trained Lawyer</span>
            </h2>
          </div>
          <div className="w-full flex flex-col justify-end mb-10 lg:mb-24 gap-6 h-auto lg:h-[650px]">
            <div>
              <h1 className="font-inter-tight font-black text-[40px] md:text-[55px] lg:text-[70px] text-center leading-[100%] text-white">
                MLC
              </h1>
            </div>
            {formFields.map((data, idx) => (
              <div
                key={idx}
                className="border-b border-[#A29E9E] opacity-100 pb-2"
              >
                <div className="flex gap-x-4 items-center mb-2">
                  <Image src={data.fieldSvg} alt="alt" className="w-[20px]" />
                  <label className="font-inter-tight font-medium text-[12px] md:text-[14px] leading-[161%] text-white">
                    {data.fieldName}
                  </label>
                </div>
              </div>
            ))}
            <button className="h-[50px] md:h-[60px] cursor-pointer font-medium mt-5 bg-[#2258C3] rounded-[50px] opacity-100 text-white text-sm md:text-base">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
