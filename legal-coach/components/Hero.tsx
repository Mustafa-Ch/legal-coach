'use client';
import Image from 'next/image';
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
      <div className="mx-auto w-full min-h-[400px] lg:h-[500px] rounded-[20px] lg:rounded-[28px] bg-gradient-to-b from-[rgba(34,88,195,0.2)] to-[rgba(34,88,195,0.8)]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-4">
          <div className="font-inter-tight font-semibold text-[14px] lg:text-[17px] w-full lg:w-[140px] leading-[120%] text-center lg:text-left text-[#2258C3]">
            Empowering Self-Represented Litigants
          </div>
          <div className="font-inter-tight font-normal text-[28px] sm:text-[40px] lg:text-[65px] w-full lg:w-[60%] leading-[36px] sm:leading-[50px] lg:leading-[85px] text-center text-white">
            AI-Powered Legal Guidance for Family & Civil Cases
          </div>
          <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[140px] p-2 flex gap-2 justify-center items-center flex-col bg-[#1A2B4D] rounded-[20px] lg:rounded-[30px]">
            <div className="flex justify-between w-full px-1">
              <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]">
                <Image src={assistant} alt="alt" className="object-cover h-full w-full rounded-full" />
              </div>
              <div className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] ml-2 flex justify-center items-center border border-white rounded-full">
                <Image src={search} alt="alt" className="object-cover w-[15px]" />
              </div>
            </div>
            <div className="font-inter-tight text-[12px] lg:text-[14px] text-center text-white">
              24/7 AI Chatbot Support
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden mt-4">
          <Marquee gradient={false} speed={80}>
            <div className="font-inter-tight font-semibold leading-none text-[60px] sm:text-[100px] lg:text-[170px] text-white/30">
              MY LEGAL COACH
            </div>
          </Marquee>
        </div>
        <div className="flex gap-x-3 mt-6 justify-center lg:justify-start lg:ml-5">
          {images.map((image, idx) => (
            <div key={idx} className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-full border border-white flex justify-center items-center">
              <Image src={image} alt="alt" className="w-[18px] h-[18px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 relative gap-5">
        <div className="bg-white px-5 py-6 flex flex-col lg:flex-row items-center gap-6 flex-1 rounded-[14px]">
          <div className="w-full lg:w-[350px] h-auto lg:h-[140px] relative bg-[#1A2B4D] py-4 px-6 rounded-[20px] flex gap-3">
            <div className="flex flex-col gap-4">
              <p className="text-[14px] sm:text-[16px] text-white leading-[20px]">
                Track Your Progress with Tiered Checklists & Reminders
              </p>
              <div className="w-[120px] h-[35px] sm:w-[130px] sm:h-[38px] bg-white rounded-[27px] flex items-center justify-center gap-x-2 text-[12px] text-black cursor-pointer">
                <p className="font-medium">Get Started</p>
                <Image src={arrows} alt="alt" />
              </div>
            </div>
            <div className="hidden lg:block rotate-[12deg] mt-2">
              <Image src={arrow} alt="alt" className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]" />
            </div>
            <div className="absolute -top-40 sm:-top-52 lg:-top-64 z-10 left-1/2 lg:left-[450px] -translate-x-1/2 lg:translate-x-0 animate-scaleInOut">
              <Image src={assistantImage} alt="alt" className="max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]" />
            </div>
          </div>
          <div className="text-[40px] sm:text-[50px] lg:text-[70px] font-extrabold leading-[45px] sm:leading-[55px] lg:leading-[70px] text-[#7585A31A] uppercase text-center lg:text-left w-full lg:w-[350px]">
            AI Assistant
          </div>
        </div>
        <div className="w-full lg:w-[500px] rounded-[14px] bg-gradient-to-b from-[#1A2B4D] to-[#3C64B3] relative">
          <Image src={dashboard} alt="alt" className="h-[180px] sm:h-[220px] lg:h-[260px] w-[90%] sm:w-[400px] lg:w-[450px] absolute -top-16 sm:-top-20 lg:-top-24 right-1/2 lg:right-7 translate-x-1/2 lg:translate-x-0" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-scaleInOut {
          animation: scaleInOut 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
