'use client';

import Image from "next/image";
import line from "../public/imges/line-chart-up-02.png";
import icons from "../public/imges/icons2.png";
import graphs from "../public/imges/graphs.png"
import box7 from "../public/imges/image (16).png"
import file from "../public/imges/item.png"
const Advantages = () => {
  return (
    <div className="w-full min-h-screen bg-[#FEFEFE] px-10 mx-auto flex flex-col gap-5 items-center ">
      <div className="mt-10 bg-[#F1F1F6] p-1 pr-3 w-[150px] h-[30px] rounded-[10px] flex items-center gap-x-4">
        <div className="bg-[#C8D3FE] w-[35px] h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={line} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] text-[#120E14]">
          Advantages
        </p>
      </div>
      <div>
        <h2 className="font-inter-tight font-normal text-[40.47px] leading-[61.6px] text-center text-[#120E14]">
          Why our MLC in Legal Matters is better?
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 p-8">
        <div className="col-span-8 bg-[#F0F4FA] row-span-2 h-[300px] border rounded-3xl p-6">
          <h3 className="font-inter font-normal text-[20.88px] leading-[35.2px] text-[#120E14]">
            Private
          </h3>

          <p className="font-inter font-normal text-[12px] w-[40%] leading-[22.4px] text-[#868589]">
            We stand firm on privacy, ensuring that users' conversations remain
            secure and anonymous.
          </p>
        </div>
        <div className="col-span-4 row-span-2 relative h-[300px] bg-[#F0F4FA] border rounded-3xl p-6">
          <div className="w-full">
            <h3 className="font-inter font-normal text-[20.88px] leading-[35.2px] text-[#120E14]">
              75% Time saved
            </h3>
            <p className="text-[12px] text-[#868589]">On routine tasks.</p>
            <Image src={graphs} alt="alt"  className="mt-5"/>
          </div>
        </div>

        <div className="col-span-5 row-span-2 flex flex-col gap-6">
          <div className="h-[100px] border rounded-3xl p-4  bg-[#F0F4FA]">
            <h3 className="font-inter font-normal text-[20.88px] leading-[35.2px] text-[#120E14]">
              Fast
            </h3>

            <p className="font-inter w-[80%] font-normal text-[12px] leading-[22.4px] text-[#868589]">
              The fastest online MLC service, ideal for avoiding expenses and
              appointments.
            </p>
          </div>
          <div className="h-[220px] border bg-[#F0F4FA] rounded-3xl p-6">
            <Image src={file} alt="alt" />
            <h3 className="font-inter font-normal text-[20.13px]  text-[#120E14]  mt-4">
              90% Cost reduction
            </h3>
            <p className="font-inter font-normal w-[75%] text-[12px] text-[#868589]">
              To Uploading any document.
            </p>
          </div>
        </div>

        <div className="col-span-3 h-full bg-[#F0F4FA] border rounded-3xl p-6">
          <h3 className="font-inter font-normal text-[20.13px] leading-[35.2px] text-[#120E14]">
            24/7 Support
          </h3>

          <p className="font-inter font-normal w-[75%] text-[12px] leading-[22.4px] text-[#868589]">
            Our customer support team is always available to assist you with any
            questions about the platform.
          </p>
          <Image src={icons} alt="alt" className="w-[400px] mt-10" />
        </div>

        <div className="col-span-4 h-[350px] bg-[#F0F4FA] border rounded-3xl p-6">
          <div className="flex flex-col justify-end h-full">
            <Image src={box7} alt="alt" className="" />

            <h3 className="font-inter font-normal text-[20.13px] leading-[35.2px] text-[#120E14]">
              90% Cost reduction
            </h3>
            <p className="font-inter font-normal w-[75%] text-[12px] text-[#868589]">
              In legal services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages
