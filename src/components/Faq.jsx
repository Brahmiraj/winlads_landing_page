import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Is this promotion valid Australia wide?",
    answer: "Yes, the promotion is valid Australia wide.",
  },
  {
    id: 2,
    question: "Is this an ongoing payment?",
    answer: "No, it is not an ongoing payment. It's a one-time payment.",
  },
  {
    id: 3,
    question: "Do I receive Entries?",
    answer: "Yes, you will receive entries for participating.",
  },
  {
    id: 4,
    question: "Is the cash tax-free?",
    answer: "Yes, the cash is tax-free.",
  },
  {
    id: 5,
    question: "Do I need to be watching the live or answer my phone to win?",
    answer:
      "No, you don't need to be watching the live or answer your phone to win.",
  },
];

export default function Faq() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="poppins flex flex-col gap-10 justify-center items-center px-40 max-2xl:px-20 max-sm:px-5 max-w-[2400px] mx-auto 4xl:pt-60 pt-10">
      <div className="text-5xl font-semibold 4xl:text-8xl max-sm:text-3xl">
        Faq
      </div>
      <div className="w-full flex flex-col gap-5 4xl:gap-10">
        {faqData.map((faqItem) => (
          <div key={faqItem.id} className="flex flex-col max-sm:text-xs">
            <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl">
              <h1>{faqItem.question}</h1>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", damping: 3 }}
              >
                {expandedId === faqItem.id ? (
                  <IoIosArrowDown
                    className="cursor-pointer"
                    onClick={() => handleToggleAnswer(faqItem.id)}
                  />
                ) : (
                  <IoIosArrowForward
                    className="cursor-pointer"
                    onClick={() => handleToggleAnswer(faqItem.id)}
                  />
                )}
              </motion.div>
            </div>
            {expandedId === faqItem.id && <p>{faqItem.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
