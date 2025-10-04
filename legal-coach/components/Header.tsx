"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import chatSvg from "../public/imges/chat.png";
import men from "../public/imges/men.jpg";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="mx-auto px-4 py-3">
      <div className="bg-white rounded-[20px] shadow-md w-full h-[55px] flex justify-between items-center px-4">
        <div className="flex items-center gap-x-3">
          <div className="w-[40px] h-[40px] font-semibold rounded-[16px] text-white flex justify-center items-center bg-[#2258C3]">
            MLC
          </div>
          <div className="text-black font-semibold text-[15.5px] font-inter-tight">
            My Legal Coach
          </div>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-x-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-[13px] font-inter-tight transition ${
                pathname === link.href
                  ? "text-[#2258C3] font-bold"
                  : "text-[#7585A3] font-medium hover:text-[#2258C3]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-x-5">
          <button className="cursor-pointer font-inter-tight font-medium text-[#7585A3] text-[14px] hover:text-[#2258C3] transition">
            Dashboard
          </button>

          <div className="w-[140px] h-[40px] bg-[#1A2B4D] rounded-[10px] flex justify-center items-center gap-x-2 cursor-pointer hover:scale-105 transition">
            <Image src={chatSvg} alt="chat" />
            <p className="font-inter-tight font-semibold text-[14px] text-white">
              AI Assistant
            </p>
          </div>

          <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full overflow-hidden">
            <Image
              src={men}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <button
          className="lg:hidden text-[#2258C3]"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300 rounded-r-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <div className="flex items-center gap-x-2">
            <div className="w-[35px] h-[35px] font-semibold rounded-md text-white flex justify-center items-center bg-[#2258C3]">
              M
            </div>
            <span className="text-[#1A2B4D] font-bold text-[16px]">
              My Legal Coach
            </span>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-[#2258C3]" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] font-inter-tight ${
                pathname === link.href
                  ? "text-[#2258C3] font-bold"
                  : "text-[#7585A3] font-medium hover:text-[#2258C3]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 flex flex-col gap-4 mt-4">
          <button className="font-inter-tight font-medium text-[#7585A3] text-[14px] hover:text-[#2258C3] text-left">
            Dashboard
          </button>

          <div className="w-full h-[40px] bg-[#1A2B4D] rounded-[10px] flex justify-center items-center gap-x-2 cursor-pointer hover:scale-[1.02] transition">
            <Image src={chatSvg} alt="chat" />
            <p className="font-inter-tight font-semibold text-[14px] text-white">
              AI Assistant
            </p>
          </div>

          <div className="flex items-center gap-x-3 mt-2">
            <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full overflow-hidden">
              <Image
                src={men}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#1A2B4D] font-semibold">John Doe</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
