"use client";
import Image from "next/image";
import line from "../public/imges/line-chart-up-02.png";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Question = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const faqs: Question[] = [
    {
      question: "How long does it take to complete a divorced case?",
      answer:
        "The duration of a divorce case depends on various factors, such as mutual consent, legal documentation, and local court timelines. Typically, uncontested cases may take 2–6 months, while contested cases can take longer due to hearings and negotiations.",
    },
    {
      question: "What types of legal cases can I manage on My Legal Coach?",
      answer:
        "My Legal Coach supports a wide range of legal cases including family law, contracts, property disputes, employment matters, and business compliance. You can create, track, and manage documents for most common legal needs within the platform.",
    },
    {
      question: "How does the guided document-drafting wizard work?",
      answer:
        "Our guided drafting wizard simplifies the legal process by asking you step-by-step questions. Based on your responses, it automatically generates accurate legal documents tailored to your specific situation using AI assistance.",
    },
    {
      question: "Can I generate legal documents for free?",
      answer:
        "Yes, you can generate up to 5 legal documents for free using the Trial plan. This lets you explore the platform and test the quality of AI-generated legal content before upgrading to a paid plan.",
    },
    {
      question: "How does the GPT-based chatbot help me?",
      answer:
        "The GPT-powered chatbot acts as your personal legal assistant. It can answer general legal questions, explain clauses in plain language, and guide you through the document creation process — helping you save time and avoid confusion.",
    },
  ];

  const [questions] = useState<Question[]>(faqs);

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 mx-auto">
      {/* Badge */}
      <div className="mt-6 sm:mt-10 bg-[#FFFFFF] p-1 w-[100px] sm:w-[120px] h-[28px] sm:h-[30px] rounded-[10px] flex items-center gap-x-2 sm:gap-x-4">
        <div className="bg-[#C8D3FE] w-[25px] sm:w-[35px] h-[20px] sm:h-[25px] rounded-[9px] flex justify-center items-center">
          <Image src={line} alt="alt" className="w-[12px] sm:w-auto h-auto" />
        </div>
        <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[20px] sm:leading-[22.4px] text-[#120E14]">
          FAQ
        </p>
      </div>

      {/* Title */}
      <h2 className="font-inter-tight my-6 sm:my-10 font-normal text-[28px] sm:text-[35px] md:text-[45px] leading-[40px] sm:leading-[50px] md:leading-[70px] text-black">
        Frequently Asked Questions
      </h2>

      {/* Accordion List */}
      <div className="flex flex-col gap-2 sm:gap-4">
        {questions.map((q, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="border-t border-[#7585A3] cursor-pointer"
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                  <span className="font-inter mt-3 sm:mt-5 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px]">
                    {q.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-inter-tight font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[24px] tracking-[0%] text-[#59595B] rounded-md mb-3">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
