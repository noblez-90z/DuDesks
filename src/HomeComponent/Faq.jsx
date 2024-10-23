import { useState } from "react";
import plus from "../assets/Icon wrap (1).svg";
import sub from "../assets/Icon wrap.svg";
import ArrowRight from "../assets/arrowR.svg";
import avatars from "../assets/Avatar group.svg";
import { Link } from "react-router-dom";

const Faq = () => {
  // const [question, setQuestionOpen] = useState;
  // const [menuIcon, setMenuIcon] = useState(plus);
  // const handleMenu = () => {
  //   setMenuIcon(menuIcon === plus ? sub : plus);

  //   setQuestionOpen(!question);
  // };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How easy is it to set up EduDesks?",
      answer:
        "Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.",
    },
    {
      question: "Can I track income and expenses?",
      answer:
        "Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.",
    },
    {
      question: "Can I edit payment details after setting them up?",
      answer:
        "Yes, you can easily modify employee payment details and schedules whenever needed.",
    },
    {
      question: "Can parents pay school fees into the website",
      answer:
        "Currently, the platform does not support fee collection. However, you can manage and track school fees by entering the income manually.",
    },
    {
      question: "What happens if the wallet runs out of funds?",
      answer:
        "If your wallet runs low, you will be notified, and you can quickly top it up to continue making payments without interruption.",
    },
    {
      question: "How do I pay staff salaries?",
      answer:
        "You can pay staff salaries directly from the platform by funding your wallet, entering employee details, or directly from their profile.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-[28px] pb-5  pt-8 bg-[#e2e9f6]">
      <h2 className="font-semibold text-[24px] text-[#041822] capitalize">
        Frequently asked questions
      </h2>
      <p className="text-[14px]  text-[#59676e]">
        Popular questions asked about Edudesk
      </p>
      <div className="block md:flex justify-between mt-8">
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className=" py-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="font-semibold text-[14px] text-[#041822]">
                  {faq.question}{" "}
                </h2>
                <span>
                  {openIndex === index ? (
                    <img src={sub} alt="" />
                  ) : (
                    <img src={plus} />
                  )}{" "}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[12px] text-[#59676e] py-2">{faq.answer} </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1  px-5 mt-5 md:mt-0">
          <div className="bg-[#002f49] text-[#f8fbfd] w-[270px] px-5 py-4 text-center rounded-lg mx-auto">
            <img src={avatars} alt="" className="mx-auto py-2" />
            <h2 className="font-semibold text-[16px] py-3">
              Still have questions?
            </h2>
            <p className="text-[12px] py-1">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="flex items-center mx-auto my-5   px-4 py-1   bg-[#f8fbfd]  rounded-full ">
              <Link className="flex items-center gap-1 font-bold text-[16px] text-[#002f49]">
                Get in touch
                <img src={ArrowRight} alt="" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
