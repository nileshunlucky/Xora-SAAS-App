import { useState } from "react";

const faq = () => [
  { no: 1, question: "How easy is it to setup Xora?", answer: "Absolutely! Not only can you upgrade your plan at any time, but you also get a prorated discount giving you maximum value for your subscription." },
  { no: 2, question: "How secure is Xora?", answer: "Xora uses state-of-the-art encryption and multi-factor authentication to ensure your data remains secure." },
  { no: 3, question: "Can I integrate Xora with other platforms?", answer: "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription." },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faq().map((item, index) => (
        <div
          key={item.no}
          className={`rounded-2xl ${activeIndex === index ? "bg-[#243373]" : "bg-[#000226]"}`}
        >
          <div
            onClick={() => toggleAccordion(index)}
            className="text-xl font-bold cursor-pointer relative flex justify-between items-center gap-5 p-5"
          >
            {item.question}
            <div
              className={`absolute bg-black border-2 border-blue-950 h-[40px] w-[40px] rounded-full right-[5%]
              before:absolute before:h-[2px] before:w-[20px] before:bg-white before:top-[50%] before:left-[23%]
              after:absolute after:h-[2px] after:w-[20px] after:bg-white after:top-[50%] after:left-[23%]
              ${activeIndex === index ? "after:rotate-0 after:bg-[#2ef1ff] before:bg-[#2ef1ff]" : "after:rotate-90"}`}
            />
          </div>
          <div className={`text-lg p-5 ${activeIndex === index ? "block" : "hidden"}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;