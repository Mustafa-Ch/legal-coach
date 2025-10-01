"use client";
import Image from "next/image";
import assistant from "../public/imges/assistantImage.png";
import person from "../public/imges/person.png";
import sms from "../public/imges/sms.png";
import line from "../public/imges/line.png";
import phone from "../public/imges/call.png";
const Auth = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/imges/authbg.png')" }}
    >
      <div className="w-full min-h-screen flex justify-center items-center ">
        <div
          className=" bg-[#1A2B4D]  opacity-100
             w-[1100px] h-[650px] p-5 mx-auto rounded-[20px] flex justify-center items-center gap-x-10"
        >
          <div
            className="h-full w-full p-10 justify-between relative flex flex-col  bg-cover bg-center rounded-[20px]"
            style={{ backgroundImage: "url('/imges/authbg.png')" }}
          >
            <h1 className="font-inter-tight font-black text-[120.68px] leading-[100%] tracking-[0%] text-white ">
              MLC
            </h1>
            <Image
              src={assistant}
              alt="alt"
              className="w-[350px] h-[350px] absolute top-28 -right-10 "
            />
            <h2 className="font-inter-tight font-semibold text-[50.83px] text-[#FFFFFF] leading-[60px] tracking-[0] uppercase">
              Perform <br /> Like a <br />
              <span className="font-light uppercase">Trained Lawyer</span>
            </h2>
          </div>
          <div className="w-full flex flex-col justify-end mb-24 gap-8 h-[650px]">
            <div>
              <h1 className="font-inter-tight font-black text-[70px] text-center leading-[100%] tracking-[0%] text-white ">
                MLC
              </h1>
            </div>
            {[1, 2, 3, 4, 5].map(() => (
              <div className=" border-b-1 border-[#A29E9E] opacity-100 ">
                <div className="flex gap-x-4 items-center mb-3">
                  <Image src={person} alt="alt" className="w-[20px]" />
                  <label className="font-inter-tight font-medium text-[12px] leading-[161%] tracking-[0] text-white">
                    Enter Your First Name
                  </label>
                </div>
              </div>
            ))}
            <button className=" h-[60px] cursor-pointer font-medium mt-5 bg-[#2258C3] rounded-[50px] opacity-100 text-white">
           Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
