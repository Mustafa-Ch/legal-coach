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
  const images=[facebook,instagrm,linked,X]; 
  return (
    <div className="px-4 mx-auto mt-4">
      <div className="mx-auto w-full h-[500px] opacity-100  rounded-[28px] bg-gradient-to-b from-[rgba(34,88,195,0.2)] to-[rgba(34,88,195,0.8)]">
        <div className="flex justify-between p-4 mx-auto">
          <div className="font-inter-tight font-semibold text-[17px] w-[140px] pt-6 ml-10 leading-[100%] tracking-[0%] align-middle text-[#2258C3]">
            Empowering Self-Represented Litigants
          </div>

          <div className="self-center items-center font-inter-tight font-normal text-[65px] w-[60%] leading-[85px] tracking-[0%] text-center pt-10  align-middle text-white">
            AI-Powered Legal Guidance for Family & Civil Cases
          </div>

          <div className="w-[150px] h-[140px]  p-1 flex gap-2 justify-center items-center flex-col bg-[#1A2B4D] opacity-100 rounded-[30px]">
            <div className="flex justify-between w-full px-1">
              <div className="w-[70px] h-[70px] ">
                <Image
                  src={assistant}
                  alt="alt"
                  className="object-cover h-full w-full rounded-full"
                />
              </div>
              <div className="w-[35px] h-[35px] ml-4 flex justify-center items-center opacity-100 border border-white rounded-full">
                <Image
                  src={search}
                  alt="alt"
                  className="object-cover w-[15px]"
                />
              </div>
            </div>
            <div className="font-inter-tight ml-4  font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-[#FFFFFF]">
              24/7 AI Chatbot Support
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Marquee gradient={false} speed={120}>
            <div className="font-inter-tight font-semibold leading-none text-[170px]   tracking-[0%] text-white/30">
              MY LEGAL COACH
            </div>
          </Marquee>
        </div>
        <div className="flex gap-x-3 mt-10 ml-5">
          {images.map((image, idx) => (
            <div className="w-[35px] h-[35px] rounded-full border border-white opacity-100 flex justify-center items-center">
              <Image
                key={idx}
                src={image}
                alt="alt"
                className="w-[20px] h-[20px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex  mt-5 relative gap-x-5">
        <div className="bg-[#FFFFFF] px-5  flex items-center gap-[50px] flex-1 rounded-[14px]  ">
          <div className="w-[350px] h-[140px] relative bg-[#1A2B4D] py-4 px-6 rounded-[20px] opacity-100 flex gap-3">
            <div className="flex flex-col gap-4">
              <p
                className="w-[160px]  
    font-inter-tight font-normal text-[16px] leading-[20px] tracking-[0%] 
    align-middle text-white"
              >
                Track Your Progress with Tiered Checklists & Reminders
              </p>
              <div
                className="w-[130px] h-[38px]
  bg-white rounded-[27px] opacity-100 flex items-center justify-center gap-x-2
  font-inter-tight font-normal text-[12px]   tracking-[0%] 
  align-middle text-black cursor-pointer"
              >
                <p className='font-medium'> Get Started</p>
                <Image src={arrows} alt="alt"/>
              </div>
            </div>
            <div className="rotate-[12.01deg] mt-2">
              <Image src={arrow} alt="alt" className="h-[100px] w-[100px] " />
            </div>
            <div className="absolute -top-64 z-10 left-[450px] animate-scaleInOut">
              <Image src={assistantImage} alt="alt" className="max-w-[400px]" />

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
          <div
            className="font-inter-tight font-extrabold text-[70px] leading-[70px] 
  tracking-[0%] align-middle text-[#7585A31A] w-[350px] uppercase"
          >
            AI Assistant
          </div>
        </div>
        <div className="w-[500px] rounded-[14px] bg-gradient-to-b from-[#1A2B4D] to-[#3C64B3]">
          <Image
            src={dashboard}
            alt="alt"
            className="h-[260px] w-[450px] absolute -top-24 right-7"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
