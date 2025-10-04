"use client";
import Image from "next/image";
import assistant from "../public/imges/heroAssistant.png";
import search from "../public/imges/search.png";
import linked from "../public/imges/linked.png";
import X from "../public/imges/X.png";
import instagrm from "../public/imges/instagrm.png";
import facebook from "../public/imges/facebook.png";
import arrow from "../public/imges/Arrow 3.png";
import arrows from "../public/imges/Arrow 6.png";
import assistantImage from "../public/imges/assistantImage.png";
import dashboard from "../public/imges/dashboard.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const images = [facebook, instagrm, linked, X];
  return (
    <div className="px-4 mx-auto mt-4">
      <div className="mx-auto w-full h-auto lg:h-[500px] opacity-100 rounded-[28px] bg-gradient-to-b from-[rgba(34,88,195,0.2)] to-[rgba(34,88,195,0.8)]">
        <div className="flex flex-col lg:flex-row justify-between p-4 mx-auto text-center lg:text-left items-center lg:items-start">
          <div className="font-inter-tight font-semibold text-[15px] sm:text-[17px] w-full lg:w-[140px] pt-4 lg:pt-6 lg:ml-10 leading-[100%] text-[#2258C3]">
            Empowering Self-Represented Litigants
          </div>

          <div className="font-inter-tight font-light text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full lg:w-[60%] leading-[35px] sm:leading-[50px] lg:leading-[70px] text-center pt-6 lg:pt-10 text-white">
            AI-Powered Legal Guidance for Family & Civil Cases
          </div>

          <div className="w-[150px] h-[140px] p-1 flex gap-2 justify-center items-center flex-col bg-[#1A2B4D] rounded-[30px] mt-6 lg:mt-0">
            <div className="flex justify-between w-full px-1">
              <div className="w-[70px] h-[70px]">
                <Image
                  src={assistant}
                  alt="alt"
                  className="object-cover h-full w-full rounded-full"
                />
              </div>
              <div className="w-[35px] h-[35px] ml-4 flex justify-center items-center border border-white rounded-full">
                <Image
                  src={search}
                  alt="alt"
                  className="object-cover w-[15px]"
                />
              </div>
            </div>
            <div className="font-inter-tight ml-0 lg:ml-4 font-normal text-[13px] sm:text-[14px] leading-[100%] text-[#FFFFFF]">
              24/7 AI Chatbot Support
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden mt-4 lg:mt-0">
          <Marquee gradient={false} speed={120}>
            <div className="font-inter-tight font-semibold leading-none text-[80px] sm:text-[120px] md:text-[150px] lg:text-[170px] text-white/30">
              MY LEGAL COACH
            </div>
          </Marquee>
        </div>

        <div className="flex gap-x-3 xl:mt-8  ml-5 justify-start">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="w-[35px]   h-[35px] rounded-full border border-white flex justify-center items-center"
            >
              <Image src={image} alt="alt" className="w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 lg:mt-5 relative gap-14 sm:gap-32 md:gap-28 lg:gap-x-5">
        <div className="bg-[#FFFFFF] px-5 flex flex-col sm:flex-row items-center gap-6 lg:gap-[50px] flex-1 rounded-[14px]">
          <div className="w-full sm:w-[350px] h-auto lg:h-[140px] relative bg-[#1A2B4D] py-4 px-6 rounded-[20px] flex gap-3">
            <div className="flex flex-col gap-4">
              <p className="w-full sm:w-[160px] font-inter-tight font-normal text-[14px] sm:text-[16px] leading-[20px] text-white">
                Track Your Progress with Tiered Checklists & Reminders
              </p>
              <div className="w-[130px] h-[38px] bg-white rounded-[27px] flex items-center justify-center gap-x-2 font-inter-tight text-[12px] text-black cursor-pointer">
                <p className="font-medium">Get Started</p>
                <Image src={arrows} alt="alt" />
              </div>
            </div>
            <div className="rotate-[12.01deg] mt-2 self-center">
              <Image
                src={arrow}
                alt="alt"
                className="h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
            </div>
            <div className="hidden sm:block absolute -top-36 sm:-top-56 lg:-top-72 z-10 sm:left-[130%] md:left-[450px] lg:left-[450px] -translate-x-1/2 lg:translate-x-0 animate-scaleInOut">
              <Image
                src={assistantImage}
                alt="alt"
                className="max-w-[250px] sm:max-w-[300px] lg:max-w-[400px]"
              />
              <style jsx>{`
                @keyframes scaleInOut {
                  0%,
                  100% {
                    transform: scale(1);
                  }
                  50% {
                    transform: scale(1.1);
                  }
                }
                .animate-scaleInOut {
                  animation: scaleInOut 2s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>

          <div className="font-inter-tight font-extrabold text-[50px] sm:text-[60px] lg:text-[70px] leading-[50px] sm:leading-[60px] lg:leading-[70px] text-[#7585A31A] w-full sm:w-[350px] uppercase text-left">
            AI Assistant
          </div>
        </div>

        <div className="relative w-full lg:w-[500px] h-[150px] lg:h-[160px] rounded-[14px] bg-gradient-to-b from-[#1A2B4D] to-[#3C64B3]">
          <Image
            src={dashboard}
            alt="alt"
            className="
    h-[140px] sm:h-[200px] lg:h-[220px] 
    w-[80%] sm:w-[350px] lg:w-[400px]
    absolute -top-10 sm:-top-20 lg:-top-24 
    right-[50%] translate-x-1/2 lg:translate-x-6 xl:translate-x-0 lg:right-7 
    mx-auto
  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
