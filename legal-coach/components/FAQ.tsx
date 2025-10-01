"use client";
import Image from "next/image";
import line from "../public/imges/line-chart-up-02.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <div className="w-full min-h-screen px-20 mx-auto">
      <div className="mt-10 bg-[#FFFFFF] p-1 w-[120px] h-[30px] rounded-[10px] flex items-center gap-x-4">
        <div className="bg-[#C8D3FE] w-[35px] h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={line} alt="alt" />
        </div>
        <p className="font-inter font-normal text-[12px] leading-[22.4px] text-[#120E14]">
          FAQ
        </p>
      </div>

      <h2 className="font-inter-tight my-10 font-normal text-[45px] leading-[70px] text-black">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col ">
        {[1, 2, 3, 4, 5].map(() => (
          <Accordion
            type="single"
            collapsible
            className="border-t border-[#7585A3] cursor-pointer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="">
                <div className="flex items-center gap-x-4">
               
                  <span className="font-inter mt-5">
                    How long does it take to complete a divorced case?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                className="
    font-inter-tight
    font-normal
    text-[13px]
    leading-[24px]
    tracking-[0%]
    align-middle
    text-[#59595B]
    rounded-md
    mb-3
  "
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
