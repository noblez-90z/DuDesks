import ArrowRight from "../assets/arrow-right-02-round.svg";
import line from "../assets/Vector 7369 (1).svg";
import line2 from "../assets/Vector 7369.svg";

const Section = () => {
  return (
    <div className="px-[28px] pb-4 pt-8 bg-[#e2e9f6]">
      <div className="">
        <h2 className="font-bold text-[20px] text-[#4b8bbe] text-center py-2 capitalize">
          Affordable plans for school’s needs
        </h2>
        <p className="text-[14px] text-[#002f49] text-center py-2 capitalize">
          Choose the best plan for your school’s needs and budget
        </p>
        <div className="block md:flex gap-4 items-end mt-5 py-6 ">
          <div className="rounded-lg flex-1 bg-[#f8fbfd] px-3 py-3 h-fit shadow-sm ">
            <h2 className="font-semibold text-[18px] py-2 mt-4">
              Monthly Plan
            </h2>
            <p className="py-1">Perfect for small school or short-term needs</p>
            <p className="py-1 text-[12px]">
              <span className="font-semibold text-[24px]">N 5000</span> Per
              month
            </p>
            <button className="w-full  flex justify-center items-center mx-auto my-5  gap-1 px-4 py-1   font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
              start 30 days free trial
              <img src={ArrowRight} alt="" />
            </button>
          </div>
          <div className="rounded-lg flex-1   pt-3 bg-[#002f49] mt-5 md:mt-0 shadow-sm">
            <div className="px-3 text-[#fefbfd]">
              <h2 className="font-semibold text-[18px] py-2">Quarterly Plan</h2>
              <p className="py-1">Opt for termly billing to save more.</p>
              <p className="py-1 text-[12px]">
                <span className="font-semibold text-[24px]">N 30000</span> Per
                Quarterly
              </p>
            </div>
            <div className="  w-full h-[140px]  text-center px-3 pt-1 bg-[url('./assets/Ellipse53.svg')] bg-cover bg-center ">
              {" "}
              <p className="mx-auto mt-2 w-fit  px-1 bg-[#f8fbfd] text-[#041822] rounded-lg">
                <span className=" text-center text-[12px]">
                  Save 20% a year
                </span>
              </p>
              <button className="mt-10 w-full  flex justify-center items-center mx-auto gap-1 px-4 py-1   font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
                start 30 days free trial
                <img src={ArrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="rounded-lg flex-1 bg-[#f8fbfd] px-3 py-3 mt-5 md:mt-0 shadow-sm">
            <h2 className="font-semibold text-[18px] py-2 mt-4">Yearly Plan</h2>
            <p className="py-1">
              Our best value for schools looking for long term solutions
            </p>
            <p className="py-1 text-[12px]">
              <span className="font-semibold text-[24px]">N 60000</span> Per
              year
            </p>
            <button className="w-full flex justify-center items-center mx-auto my-5  gap-1 px-4 py-1  font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
              start 30 days free trial
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="mt-8 py-6">
          <h2 className="font-bold text-[24px] text-[#4b8bbe] text-center">
            How it works
          </h2>
          <p className="text-[14px] text-[#041822] text-center">
            Manage your school’s income and Expenses in just a few simple steps
          </p>
          <div className="block md:flex mt-12 gap-1">
            <div className="flex-1   py-3">
              <div className="relative">
                <div className="border-[2px] border-[#f8fbfd] absolute left-0 w-[30px]  h-[30px]   bg-[#041822] rounded-full flex justify-center items-center">
                  <p className=" text-[#f8fbfd]  ">1</p>
                </div>
                <div className="hidden md:block absolute left-8 top-4">
                  <img src={line} alt="" className="" />
                </div>
              </div>
              <div className="md:px-7">
                <h2 className="font-semibold text-[14px] mt-14 py-2">
                  Set Up Your Account
                </h2>
                <p className="text-[12px] text-[#041822]">
                  Quickly sign up, input your school’s basic details and pay
                  subscription to get started with our financial management tool
                </p>
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-11">
              <div className="relative  h-[40px]">
                <div className="border-[2px] border-[#f8fbfd] absolute left-0  w-[30px]  h-[30px] rounded-full bg-[#4b8bbe]  flex justify-center items-center">
                  <p className=" text-[#f8fbfd] ">2</p>
                </div>
                <div className="hidden md:block mt-3 absolute  left-7  bottom-6">
                  <img src={line2} alt="" className="" />
                </div>
              </div>
              <div className="md:px-4">
                <h2 className="font-semibold text-[14px]  py-2">
                  Profile Setup
                </h2>
                <p className="text-[12px] text-[#041822]">
                  Complete additional profile information, such as uploading a
                  school logo, imputing basic details and school fees details.
                </p>
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-3">
              <div className="relative">
                <div className="border-[2px] border-[#f8fbfd] w-[30px]  h-[30px] rounded-full bg-[#041822]  flex justify-center items-center">
                  <p className=" text-[#f8fbfd] ">3</p>
                </div>
                <div className="hidden md:block absolute left-8 top-4">
                  <img src={line} alt="" className="" />
                </div>
              </div>
              <div className="md:px-4">
                <h2 className="font-semibold text-[14px] mt-6 py-2">
                  Add necessary details
                </h2>
                <p className="text-[12px] text-[#041822]">
                  Enter student information, class information and staff
                  information; including payment schedules and bank details.
                </p>
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-11">
              <div className="border-[2px] border-[#f8fbfd] w-[30px]  h-[30px] rounded-full bg-[#4b8bbe]   flex justify-center items-center">
                <p className=" text-[#f8fbfd] ">4</p>
              </div>
              <h2 className="font-semibold text-[14px] mt-6 py-2">
                Fund Your Wallet
              </h2>
              <p className="text-[12px] text-[#041822]">
                Deposit the necessary funds into the secure platform wallet to
                cover salary payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
