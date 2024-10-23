import dashboard from "../assets/Dashboard.svg";
import ArrowRight from "../assets/arrowR.svg";

import caleb from "../assets/CALEB 1.svg";
import Crowns from "../assets/CROWN 1.png";
import legacy from "../assets/LEGACY 1.png";
import anita from "../assets/pngtree-school-logo-design-template-vector-png-image_6705854 1.png";
import group from "../assets/Frame 1000008615.png";
const Hero = () => {
  const schools = [
    { name: "caleb international school", logo: caleb },
    { name: "crowns gate school", logo: Crowns },
    { name: "legacy school", logo: legacy },
    { name: "anita school", logo: anita },
  ];
  return (
    <div className="hero mt-[56px] md:mt-[95px] px-[28px] bg-[#e2e9f6] pt-5 ">
      <div className="  mx-auto ">
        <div className="px-[24px]  pt-10 text-center rounded-lg bg-[#002f49] text-[#f8fdfb]">
          <div className=" text-center ">
            <h3 className="text-[14px]  text-center mx-auto  text-[#f8fbfd] bg-[#4087ad] opacity-80 w-fit rounded-lg py-1 px-2">
              Start managing your school finances today
            </h3>
            <h1 className="font-bold md:text-[50px] pt-5 leading-tight">
              Simplify school finances with our all-in-one management platform.
            </h1>

            <p className="md:font-semibold  md:text-[20px] py-2">
              Gain full control over income and expenses processes - all from
              one seamless platform designed for schools
            </p>
            <button className="flex items-center mx-auto my-5  gap-1 px-4 py-1  font-bold text-[16px] bg-[#f8fbfd] text-[#002f49] rounded-full ">
              start 30 days free trial
              <img src={ArrowRight} alt="" />
            </button>
          </div>
          <div className="">
            <img src={dashboard} alt="" />
          </div>
        </div>
        <div className=" mt-5">
          <h2 className="font-semibold text-[20px] text-[#041822] text-center py-3">
            Trusted by over 20 Schools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4  md:gap-4 justify-center py-3">
            {schools.map((schools, index) => (
              <div key={index} className=" flex items-center gap-2 ">
                <img src={schools.logo} alt="" className="w-8 h-8" />
                <p className="text-[#59676e] text-[14px] font-thin md:font-normal capitalize">
                  {schools.name}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" block md:flex justify-between items-center gap-6 mt-8 py-5">
        <div className="flex-1">
          <h2 className="capitalize font-bold text-[24px] leading-tight text-[#041822] py-3">
            manage School Finances more efficiently with Edudesks
          </h2>

          <p className="text-[14px] text-[#596768]">
            EduDesks is your comprehensive solution for seamless school
            financial management. Designed to simplify budgeting, tracking
            expenses, and managing payments, with features like automated fee
            collection, detailed financial reports, and real-time analytics, you
            can gain better control over your institution's finances
          </p>
        </div>
        <div className="flex-1  mt-8 md:mt-0 ">
          <img src={group} alt="" className="w-[250px] mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
