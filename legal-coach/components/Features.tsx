"use client";
import Image from "next/image";
import grid from "../public/imges/grid.png";
import featuresui from "../public/imges/ui-peace.png";
import featuresCard from "../public/imges/featuresCard-Photoroom.png";
import dashboard from "../public/imges/dashboard.png";
import icons from "../public/imges/icons.png";
import add from "../public/imges/add.png";

const Features = () => {
  return (
    <div className="bg-[#FEFEFE] mt-8 min-h-screen px-6">
      <div className="w-full flex flex-col gap-5 justify-center items-center py-10">
        <div className="bg-[#F1F1F6] w-[130px] h-[30px] rounded-[10px] flex items-center gap-x-3">
          <div className="bg-[#C8D3FE] w-[46px] h-[30px] rounded-[12px] flex justify-center items-center">
            <Image src={grid} alt="alt" />
          </div>
          <p className="font-inter font-normal text-[13px] text-[#120E14]">
            Features
          </p>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-3">
          <h1 className="font-inter-tight font-normal text-[35.47px] leading-[61.6px] text-center text-[#120E14]">
            Features of MLC AI
          </h1>
          <p className="font-inter-tight font-medium text-[12px] text-center text-[#120E14] w-full sm:w-[70%] md:w-[50%] lg:w-[40%]">
            Explore features that boost your productivity. From document
            automation to advanced research, we've got the hard work covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {/* Left Column */}
          <div className="flex flex-col space-y-2 col-span-1">
            <div className="w-full h-auto lg:h-[330px] px-7 mx-auto rounded-[32px] bg-[radial-gradient(40.2%_40.2%_at_50%_68.01%,_rgba(241,241,246,0)_0%,_#FFFFFF_100%)] shadow-[0px_4px_4px_0px_#00000040]">
              <p className="font-inter-tight font-medium text-[25px] py-4 w-full sm:w-[80%] md:w-[60%] text-[#120E14]">
                Guided Document Drafting Made Simple
              </p>
              <div className="flex justify-center">
                <Image src={featuresui} alt="alt" className="w-full h-auto" />
              </div>
            </div>

            <div className="w-full h-auto lg:h-[370px] rounded-[32px] bg-[#F1F1F6] flex flex-col px-4 py-10">
              <Image src={featuresCard} alt="alt" className="w-full h-auto" />
              <div>
                <h2 className="font-inter font-normal text-[25.5px] text-[#120E14]">
                  AI document handling
                </h2>
                <p className="font-inter font-light text-[12px] text-[#868589]">
                  The fastest way to summarize agreements, convert images to
                  text, translate documents, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-2 col-span-2">
            <div className="w-full h-auto lg:h-[420px] rounded-[32px] bg-[#F1F1F6] p-5">
              <div className="flex flex-col gap-2">
                <div className="w-full sm:w-[360px] h-auto sm:h-[190px] bg-[#FBFCFF] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[8px] p-5">
                  <h5 className="font-inter font-normal text-[14px] text-[#120E14]">
                    Hello, Chris! 👋
                  </h5>
                  <p className="font-inter font-light text-[12px] mt-2 text-[#868589]">
                    Please select a question from the "Prompts" library below or
                    write your own question. You can also add context from any
                    of the already existing chat from history.
                  </p>
                  <div className="flex items-center justify-center gap-x-3 bg-[#F1F1F6] h-[30px] rounded-[10px] mt-5">
                    <Image src={add} alt="alt" />
                    <p className="font-inter font-light text-[#120E14]">Add</p>
                  </div>
                </div>

                <div className="w-full sm:w-[366.63px] h-[40px] self-end bg-[#2258C3] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] flex justify-center items-center">
                  <p className="font-inter font-light text-[13px] text-[#FAFBFE] text-center">
                    What are my right as an employer in NYC?
                  </p>
                </div>

                <div className="w-[100px] h-[33px] bg-[#FBFCFF] flex items-center justify-center text-[#120E14] font-inter font-light text-[12px] rounded-[20px]">
                  Respond...
                </div>
              </div>

              <div className="mt-2">
                <h2 className="text-[#120E14] font-inter font-normal text-[25px]">
                  Ask AI MLC
                </h2>
                <p className="text-[#868589] font-inter font-light text-[12px] w-full sm:w-[70%] md:w-[60%]">
                  Legal research never been easier. Have a conversation with
                  your virtual assistant, gain insights and simple answers to
                  your complex questions in real-time.
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-[450px] h-auto lg:h-[280px] rounded-[32px] bg-[linear-gradient(180deg,_#2258C3_0%,_#1B2232_100%)] flex flex-col justify-center items-center p-4">
                <h2 className="font-inter font-light text-[20.5px] text-[#FAFBFE] text-center w-[90%]">
                  SAAS-platform to manage everything
                </h2>
                <Image
                  src={dashboard}
                  alt="alt"
                  className="w-[250px] sm:w-[300px] mt-3"
                />
              </div>

              <div className="w-full lg:w-[450px] h-auto lg:h-[280px] rounded-[32px] bg-[#F1F1F6] px-8 py-4">
                <h2 className="font-inter-tight font-medium text-[25px] text-[#120E14] w-[90%]">
                  Track Your Progress with Tiered Checklists &amp; Reminders
                </h2>
                <Image src={icons} alt="alt" className="mt-3 w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
