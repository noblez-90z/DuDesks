import { Link } from "react-router-dom";
import ArrowRight from "../assets/arrowR.svg";
import Logo from "../assets/Logo.svg";
import insta from "../assets/image 5.svg";
import twitterX from "../assets/image 6.svg";
import linkedin from "../assets/image 7.svg";

const Footer = () => {
  return (
    <div className="pt-8 bg-[#e2e9f6]">
      <div className="px-[28px]  py-8">
        <div className="border w-full text-center py-10 bg-[#002f49] text-[#f8fbfd] rounded-lg">
          <h2 className="text-[24px] font-bold text-[#f8fbfd] py-2">
            Take control of your school’s finance today
          </h2>
          <p className="text-[12px] text-[#f8fbfd]">
            Join hundreds of schools already benefiting from our financial
            management platform
          </p>
          <button className="flex items-center mx-auto my-5   px-4 py-1   bg-[#f8fbfd]  rounded-full ">
            <Link className="flex items-center gap-1 font-bold text-[16px] text-[#002f49]">
              Get started for free now
              <img src={ArrowRight} alt="" />
            </Link>
          </button>
        </div>
      </div>
      <div className="bg-[#4b8bbe] px-3 md:px-10 py-6">
        <footer>
          <img src={Logo} alt="" className="mx-auto pb-2 w-[30%] " />
          <div className="border-b-2  text-center ">
            <nav className="">
              <div className=" list-none  pb-3 flex flex-wrap justify-center items-center gap-3 md:gap-4 px-2 capitalize text-[#f8fbfd] font-semibold text-[14px]">
                <li className="flex items-center ">
                  <Link>home</Link>
                </li>
                <li className="">
                  <Link>features</Link>
                </li>
                <li className="">
                  <Link>pricing</Link>
                </li>{" "}
                <li className="">
                  <Link>contact us</Link>
                </li>
                <li className="">
                  <Link to="/Terms" className="">
                    terms of service
                  </Link>
                </li>
                <li className="">
                  <Link to="/PrivacyPolicy">privacy policy</Link>
                </li>
              </div>
            </nav>
          </div>
          <div className="flex justify-between pt-3 ">
            <p className="text-[#f8fbfd] text-[12px] md:text-[18px]">
              © 2024 Edudesks. All rights reserved
            </p>
            <div className="flex gap-1">
              <Link>
                <img src={insta} alt="" className="w-5 md:w-8" />
              </Link>
              <Link>
                <img src={twitterX} alt="" className="w-5 md:w-8" />
              </Link>
              <Link>
                <img src={linkedin} alt="" className="w-5 md:w-8" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
