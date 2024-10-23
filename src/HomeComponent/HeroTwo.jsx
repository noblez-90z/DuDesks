import group1 from "../assets/Frame 1000008513 2.svg";
import group2 from "../assets/Group 3473454 1.svg";
import group3 from "../assets/tUITION 1.png";
import group4 from "../assets/Income 1.svg";
import group5 from "../assets/overview 2.svg";
import carmera from "../assets/Frame 1000008595.svg";
import payment from "../assets/Frame 1000008644.svg";

const HeroTwo = () => {
  const datas = [
    {
      header: "Secured Wallet Management",
      text: "Access a secure wallet to handle payments for salaries and expenses without any hassle",

      pic: group1,
    },

    {
      header: "Expense Tracking Made Simple",
      text: " Monitor and track  all school-related expenses with a streamlined payment system",
      pic: group2,
    },

    {
      header: "Effortless School   fees tracking     ",
      text: "With our platform, schools can effortlessly monitor fee payments.",
      pic: group3,
    },
  ];
  const subDatas = [
    {
      header: "Effortless Income tracking",
      text: "Our platform provides a clear and detailed view of your earnings,helping you monitor every income stream effortlessly.",
      pic: group4,
    },

    {
      header: "Monitor Overall performance",
      text: "Edudesk helps you turn data  into actionable information, helping you track performance.",
      pic: group5,
    },
  ];
  return (
    <div className="px-[28px] pb-5 pt-8 bg-[#e2e9f6]">
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-[24px] text-[#4b8bbe] py-3">
            Comprehensive Features to Manage your school’s Finances
          </h2>
          <p className="text-[14px] text-[#59676e] py-2">
            Streamline your school's financial operations by efficiently
            managing salary payments and expenses.
          </p>
        </div>
        <div className="mt-[15px]">
          <div className="block md:flex gap-2 ">
            {datas.map((data, index) => (
              <div
                key={index}
                className="bg-[#f8fbfd] mt-5 md:mt-0 flex-1 px-5 py-4 rounded-lg capitalize"
              >
                <div className="flex items-center gap-2 py-2 border-b">
                  <img src={carmera} alt="" />
                  <h2 className="font-semibold text-[14px]">{data.header} </h2>
                </div>

                <p className="text-[14px] font-thin leading-snug py-2 text-[#59676e] ">
                  {data.text}{" "}
                </p>
                <img src={data.pic} alt="" />
              </div>
            ))}
          </div>
          <div className="block md:flex gap-1 mt-5 md:mt-1">
            {subDatas.map((data, index) => (
              <div
                key={index}
                className="bg-[#f8fbfd] flex-1 mt-5 md:mt-0 px-5 py-4 rounded-lg capitalize"
              >
                <div className="flex items-center gap-2 py-3 border-b">
                  <img src={carmera} alt="" />
                  <h2 className="font-semibold text-[14px]">{data.header} </h2>
                </div>

                <p className="text-[14px] font-thin leading-snug py-3 text-[#59676e] ">
                  {data.text}{" "}
                </p>
                <img src={data.pic} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="  block md:flex justify-between items-center gap-6 mt-10 py-5">
        <div className="flex-1  ">
          <img src={payment} alt="" className="w-[250px] mx-auto " />
        </div>

        <div className="flex-1 mt-5 md:mt-0">
          <h2 className="capitalize font-bold text-[24px] leading-tight text-[#041822] py-3">
            Effortless Salary Payments Made Simple
          </h2>

          <p className="text-[12px] text-[#596768]">
            Streamline your school's payroll process with our secure wallet
            system that allows for quick and easy salary payments. With just a
            few clicks, you can reduce administrative workload, eliminate
            errors, and ensure that your staff are paid accurately and on time,
            allowing you to focus more on what truly matters—educating and
            supporting your students
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
