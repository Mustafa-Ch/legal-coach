"use client";
import Image from "next/image";
import line from "../public/imges/line-chart-up-02.png";
import icons from "../public/imges/icons2.png";
import graphs from "../public/imges/graphs.png";
import box7 from "../public/imges/image (16).png";
import file from "../public/imges/file.png";
import box1 from "../public/imges/image (19).png";
import lines from "../public/imges/Vector → SVG.png";

const Advantages = ({ bottom, left, w }: any) => {
  return (
    <div className="w-full min-h-screen bg-[#FEFEFE] px-4 sm:px-6 lg:px-10 mx-auto flex flex-col gap-5 items-center">
      <div className="mt-10 bg-[#F1F1F6] p-1 pr-3 w-[120px] sm:w-[150px] h-[30px] rounded-[10px] flex items-center gap-x-4">
        <div className="bg-[#C8D3FE] w-[30px] sm:w-[35px] h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={line} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[22.4px] text-[#120E14]">
          Advantages
        </p>
      </div>

      <div>
        <h2 className="font-inter-tight font-normal text-[24px] sm:text-[32px] lg:text-[40.47px] leading-[40px] sm:leading-[50px] lg:leading-[61.6px] text-center text-[#120E14]">
          Why our MLC in Legal Matters is better?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-6 lg:p-8 w-full">
        <div className="md:col-span-8 bg-[#F0F4FA] row-span-2 h-[250px] md:h-[300px] border rounded-3xl p-4 sm:p-6 relative">
          <h3 className="font-inter font-normal text-[18px] sm:text-[20.88px] leading-[28px] sm:leading-[35.2px] text-[#120E14]">
            Private
          </h3>
          <p className="font-inter font-normal text-[12px] w-full md:w-[40%] leading-[20px] sm:leading-[22.4px] text-[#868589]">
            We stand firm on privacy, ensuring that users' conversations remain
            secure and anonymous.
          </p>
          <div
            className={`absolute bottom-${bottom} left-[${left}] hidden md:block`}
          >
            <Image src={lines} alt="alt" className={`w-[${w}]`} />
          </div>
          <div className="mt-4 md:mt-0">
            <Image src={box1} alt="alt" className="max-w-full h-auto" />
          </div>
        </div>

        <div className="md:col-span-4 row-span-2 relative h-[250px] md:h-[300px] bg-[#F0F4FA] border rounded-3xl p-4 sm:p-6">
          <div className="w-full">
            <h3 className="font-inter font-normal text-[18px] sm:text-[20.88px] leading-[28px] sm:leading-[35.2px] text-[#120E14]">
              75% Time saved
            </h3>
            <p className="text-[12px] text-[#868589]">On routine tasks.</p>
            <Image
              src={graphs}
              alt="alt"
              className="mt-3 sm:mt-5 max-w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-5 row-span-2 flex flex-col gap-6">
          <div className="h-[100px] border rounded-3xl p-4 bg-[#F0F4FA]">
            <h3 className="font-inter font-normal text-[18px] sm:text-[20.88px] leading-[28px] sm:leading-[35.2px] text-[#120E14]">
              Fast
            </h3>
            <p className="font-inter w-full sm:w-[80%] font-normal text-[12px] leading-[20px] sm:leading-[22.4px] text-[#868589]">
              The fastest online MLC service, ideal for avoiding expenses and
              appointments.
            </p>
          </div>
          <div className="w-full border bg-[#F0F4FA] rounded-3xl p-4 sm:p-6">
            <Image
              src={file}
              alt="alt"
              className="w-full max-h-[150px] object-contain"
            />
            <h3 className="font-inter font-normal text-[18px] sm:text-[20.13px] text-[#120E14] mt-4">
              5 Seconds
            </h3>
            <p className="font-inter font-normal w-full sm:w-[75%] text-[12px] text-[#868589]">
              To Uploading any document.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 h-full bg-[#F0F4FA] border rounded-3xl p-4 sm:p-6">
          <h3 className="font-inter font-normal text-[18px] sm:text-[20.13px] leading-[28px] sm:leading-[35.2px] text-[#120E14]">
            24/7 Support
          </h3>
          <p className="font-inter font-normal w-full sm:w-[75%] text-[12px] leading-[20px] sm:leading-[22.4px] text-[#868589]">
            Our customer support team is always available to assist you with any
            questions about the platform.
          </p>
          <Image
            src={icons}
            alt="alt"
            className="w-full sm:w-[400px] mt-6 sm:mt-10 mx-auto"
          />
        </div>

        <div className="md:col-span-4 h-[300px] sm:h-[350px] bg-[#F0F4FA] border rounded-3xl p-4 sm:p-6">
          <div className="flex flex-col justify-end h-full">
            <Image src={box7} alt="alt" className="max-w-full h-auto" />
            <h3 className="font-inter font-normal text-[18px] sm:text-[20.13px] leading-[28px] sm:leading-[35.2px] text-[#120E14] mt-2">
              90% Cost reduction
            </h3>
            <p className="font-inter font-normal w-full sm:w-[75%] text-[12px] text-[#868589]">
              In legal services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
