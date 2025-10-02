"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import chatSvg from "../public/imges/chat.png";
import men from "../public/imges/men.jpg";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="mx-auto px-4 py-3">
      <div className="bg-[#FFFFFF] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] w-full h-[50px] flex justify-between items-center px-4">
        <div className="flex items-center gap-x-3">
          <div className="w-[40px] h-[40px] font-semibold rounded-[16px] text-[#FFFFFF] flex justify-center items-center bg-[#2258C3]">
            MLC
          </div>
          <div className="text-[#000000] font-semibold leading-[40.09px] text-[15.5px] font-inter-tight hidden md:block">
            My Legal Coach
          </div>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-x-6">
            {links.map((link, idx) => (
              <li
                key={idx}
                className={`text-[12px] leading-[89%] font-inter-tight ${
                  pathname === link.href
                    ? "text-[#2258C3] font-bold"
                    : "text-[#7585A3] font-medium"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li className="cursor-pointer font-inter-tight font-medium leading-[89%] tracking-[0%] text-[#7585A3] text-[14px]">
              Dashboard
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <div className="w-[140px] h-[40px] bg-[#1A2B4D] rounded-[10px] flex justify-center items-center gap-x-3 cursor-pointer">
            <Image src={chatSvg} alt="chat" />
            <p className="font-inter-tight font-semibold text-[14px] leading-[20px] text-white">
              AI Assistant
            </p>
          </div>
          <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full hidden md:block">
            <Image
              src={men}
              alt="alt"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="block lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button>
                  <Menu className="w-6 h-6 text-[#2258C3]" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-white px-6 py-6"
              >
                <div className="flex items-center gap-x-3 mb-8">
                  <div className="w-[40px] h-[40px] font-semibold rounded-[16px] text-white flex justify-center items-center bg-[#2258C3]">
                    MLC
                  </div>
                  <span className="font-inter-tight font-semibold text-[16px] text-[#000000]">
                    My Legal Coach
                  </span>
                </div>
                <ul className="flex flex-col gap-y-4">
                  {links.map((link, idx) => (
                    <li
                      key={idx}
                      className={`pb-3 border-b text-[14px] font-inter-tight ${
                        pathname === link.href
                          ? "text-[#2258C3] font-bold"
                          : "text-[#7585A3] font-medium"
                      }`}
                    >
                      <Link href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pb-3 border-b cursor-pointer font-inter-tight font-medium text-[#7585A3] text-[14px]">
                    Dashboard
                  </li>
                </ul>
                {/* <div className="flex items-center gap-x-3 mt-8">
                  <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full">
                    <Image
                      src={men}
                      alt="alt"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="font-inter-tight text-[14px] font-medium text-[#000000]">
                    John Doe
                  </p>
                </div> */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
