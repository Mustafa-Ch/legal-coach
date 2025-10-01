"use client";
import Image from "next/image";
import grid from "../public/imges/grid.png";
import featuresui from "../public/imges/ui-peace.png";
import featuresCard from "../public/imges/featuresCard.png";
import dashboard from "../public/imges/dashboard.png";
import icons from '../public/imges/icons.png'
import  add from '../public/imges/add.png'

const Features = () => {
  return (
    <div className="bg-[#FEFEFE] mt-8 min-h-screen px-6 ">
      <div className="w-full flex flex-col gap-5 justify-center items-center py-10">
        <div
          className="
    bg-[#F1F1F6]
    w-[130px]
    h-[30px]
    rounded-[10px]
    opacity-[1]
    flex items-center gap-x-3
  "
        >
          <div
            className="
    bg-[#C8D3FE]
    w-[46px]
    h-[30px]
    rounded-[12px]
    opacity-[1]
    flex justify-center items-center
  
  "
          >
            <Image src={grid} alt="alt" />
          </div>
          <p
            className="
  font-inter
  font-normal
  text-[13px]
  leading-[22.4px]
  tracking-[0%]
  align-middle
  text-[#120E14]
"
          >
            Features
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-3 ">
          <h1
            className="
  font-inter-tight
  font-normal
  text-[40.47px]
  leading-[61.6px]
  tracking-[0%]
  text-center
  align-middle
  text-[#120E14]
"
          >
            Features of MLC AI
          </h1>
          <p
            className="
  font-inter-tight
  font-medium
  text-[14px]
  leading-[21.6px]
  tracking-[0%]
  text-center
  align-middle
  text-[#120E14]
  w-[40%]
"
          >
            Explore features that boost your productivity. From document
            automation to advanced research, we've got the hard work covered.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col space-y-2 col-span-1">
            <div className="w-[450px] h-[330px] px-7 mx-auto rounded-[32px] bg-[radial-gradient(40.2%_40.2%_at_50%_68.01%,_rgba(241,241,246,0)_0%,_#FFFFFF_100%)] shadow-[0px_4px_4px_0px_#00000040]">
              <p className="font-inter-tight font-medium text-[25px] py-4 w-[60%] leading-[26.2px] tracking-[0%] align-middle text-[#120E14]">
                Guided Document Drafting Made Simple
              </p>
              <div>
                <Image src={featuresui} alt="alt" />
              </div>
            </div>
            <div className="w-[450px] h-[380px] rounded-[32px] bg-[#F1F1F6] flex flex-col justify-between px-4">
              <Image src={featuresCard} alt="alt" className="mt-10" />
              <div className="mb-10 ">
                <h2 className="font-inter font-normal text-[25.5px]  text-[#120E14]">
                  AI document handling
                </h2>
                <p className="font-inter font-normal text-[13px] leading-[22.4px] tracking-[0%] align-middle text-[#868589]">
                  The fastest way to summarize agreements, convert images to
                  text, translate documents, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 col-span-2 ">
            <div className="w-full h-[420px] rounded-[32px] bg-[#F1F1F6] p-5">
              <div className="flex flex-col gap-2">
                <div className="w-[360px] h-[190px] opacity-100 bg-[#FBFCFF] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] p-5">
                  <h5 className="font-inter font-normal text-[14px] leading-[22.4px] tracking-[0%] align-middle text-[#120E14]">
                    Hello, Chris! 👋
                  </h5>
                  <p className="font-inter font-normal text-[13px] leading-[20.4px] text-[#868589]">
                    Please select a question from the "Prompts" library below or
                    write your own question. You can also add context from any
                    of the already existing chat from history
                  </p>
                  <div className="flex items-center justify-center  gap-x-3 bg-[#F1F1F6] h-[30px] rounded-[10px] mt-5">
                    <Image src={add} alt="alt" />
                    <p className="font-inter font-light text-[#120E14]">Add</p>
                  </div>
                </div>
                <div className="w-[366.63px] h-[40px] self-end bg-[#2258C3] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[8px] rounded-bl-[20px] opacity-100 shadow-[0px_165px_46px_0px_#00000003,0px_106px_42px_0px_#0000000A,0px_59px_36px_0px_#00000026,0px_26px_26px_0px_#00000042,0px_7px_15px_0px_#0000004A] flex justify-center items-center">
                  <p className="font-inter font-normal text-[14px] leading-[22.4px] text-[#FAFBFE]">
                    What are my right as an employer in NYC?
                  </p>
                </div>
                <div className="w-[120px] h-[44px] opacity-100 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] bg-[#FBFCFF] flex items-center justify-center text-[#120E14] font-inter font-normal text-[14px] leading-[22.4px]">
                  Respond...
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-[#120E14] font-inter font-normal text-[25px] leading-[35.2px]">
                  {" "}
                  Ask AI MLC
                </h2>
                <p className="text-[#868589] font-inter font-normal text-[13px] w-[60%] leading-[22.4px]">
                  Legal research never been easier. Have a conversation with
                  your virtual assistant, gain insights and simple answers to
                  your complex questions in real-time.
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-[450px] h-[280px] rounded-[32px] bg-[linear-gradient(180deg,_#2258C3_0%,_#1B2232_100%)] flex flex-col justify-center items-center">
                <h2 className="font-inter font-normal text-[25.5px]  text-[#FAFBFE] w-[80%] leading-[35.2px]">
                  SAAS-platform to manage everything
                </h2>
                <Image
                  src={dashboard}
                  alt="alt"
                  className="w-[300px] flex-end"
                />
              </div>
              <div className="w-[450px] h-[280px] rounded-[32px] bg-[#F1F1F6] px-8">
                <h2 className="font-inter-tight font-medium text-[25px] leading-[30.2px] w-[80%] mt-3 tracking-[0%] align-middle text-[#120E14]">
                  Track Your Progress with Tiered Checklists &amp; Reminders
                </h2>
                <Image src={icons} alt="alt" className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
