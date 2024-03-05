import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Is this promotion valid Australia wide?",
    answer: "The promotion is valid in all states of Australia excluding South Australia.",
  },
  {
    id: 2,
    question: "Is this an ongoing payment?",
    answer: "Yes, once you make a purchase your name goes into the draw x the amount of entries you have. You'll receive an email stating the total entries that you have and you can see that total when you login to your WinLads dashboard.",
  },
  {
    id: 3,
    question: "Do I receive Entries?",
    answer: "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.By participating, you can earn commissions on the subscription fees of individuals you refer. Additionally, you contribute to expanding our community and potentially increasing your passive income.",
  },
  {
    id: 4,
    question: "Is the cash tax-free?",
    answer: "If you take the cash it is completely tax free! How good is that!",
  },
  {
    id: 5,
    question: "Do I need to be watching the live or answer my phone to win?",
    answer:
      "No, we will contact the winner ASAP through the details they ve provided during registration which will be presented to us upon entering the winning combination into our system.If we can not contact the winner on the live feed, we will wait and try again later.As per our permits we can NOT redraw unless the prize remains unclaimed for 3 months.",
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
