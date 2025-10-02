import Image from "next/image";
import tag1 from "../public/imges/tags.png";
import tag2 from "../public/imges/tag (1).png";
import tag3 from "../public/imges/tag (2).png";
import logo from "../public/imges/logo.png";
import circleLeft from "../public/imges/circle (1).png";
import circleright from "../public/imges/circle.png";

const Footer = () => {
  const links = [
    "Home",
    "Dashboard",
    "Features",
    "Pricing",
    "How it Works",
    "FAQ",
    "Contact US",
  ];
  const tags = [
    {
      text: "Money Back Guarantee",
      image: tag1,
    },
    {
      text: "Free Trial",
      image: tag2,
    },
    {
      text: "Cancel Anytime",
      image: tag3,
    },
  ];

  return (
    <div className="bg-[#1B2232] min-h-[450px] w-full py-10 px-6 md:px-20 mx-auto relative">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-x-7">
          {tags.map((data, idx) => (
            <div
              key={idx}
              className="bg-[#15171B] flex gap-x-2 items-center pr-5 h-[25px] rounded-[10px]"
            >
              <Image src={data.image} alt="alt" className="h-[25px] w-[30px]" />
              <p className="font-inter text-[12px] text-[#FAFBFE] leading-[22.4px] tracking-[0%] font-light">
                {data.text}
              </p>
            </div>
          ))}
        </div>

        <h1 className="w-full max-w-[670px] font-inter font-normal text-[24px] md:text-[38.36px] leading-[32px] md:leading-[50.6px] text-center text-[#FAFBFE] mt-5 px-2">
          Let MLC Help’s you in Legal Guidance for Family & Civil Cases
        </h1>
        <button
          className="
            w-[150px] h-[37px] mt-5
            rounded-[10px] 
            bg-[#416DFF] 
            text-[#FAFBFE] 
            font-inter font-light 
            text-[12px] leading-[20px]
            shadow-[0px_165px_46px_0px_#2C4DD403,0px_106px_42px_0px_#2C4DD40A,0px_59px_36px_0px_#2C4DD426,0px_26px_26px_0px_#2C4DD442,0px_7px_15px_0px_#2C4DD44A] cursor-pointer
          "
        >
          Try for Free
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-y-6">
        <div className="flex items-center z-50">
          <Image src={logo} alt="alt" className="w-[70px]" />
          <p className="font-inter-tight text-[15.5px] leading-[40.09px] tracking-[0%] text-[#FFFFFF] ml-2">
            My Legal Coach
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 z-50">
            {links.map((data, idx) => (
              <li
                key={idx}
                className="font-inter z-55 font-light cursor-pointer text-[12px] leading-[18px] tracking-[0%] text-[#FAFBFE]"
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="font-inter font-normal text-[10px] leading-[14px] mt-10 text-center text-[#868589]">
        ©2025 MLC. All rights reserved.
      </div>

      <div className="hidden lg:block">
        <div>
          <Image
            src={circleLeft}
            className="absolute top-12 h-[190px] md:h-[400px] left-0"
            alt="alt"
          />
        </div>
        <div>
          <Image
            src={circleright}
            className="absolute top-10 h-[200px] md:h-[400px] right-0"
            alt="alt"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
