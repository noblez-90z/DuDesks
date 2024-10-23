import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ArrowRight from "../assets/arrow-right-02-round.svg";
import dot from "../assets/Ellipse 1.svg";
import menu from "../assets/menu.svg";
import cancelMenu from "../assets/cancel menu.svg";
import { useState } from "react";
import OverLay from "./OverLay";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(menu);
  const handleMenu = () => {
    setMenuIcon(menuIcon === menu ? cancelMenu : menu);

    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" flex items-center md:block font-sans  h-fit fixed top-0 w-full z-10 ">
      <div className="hidden md:flex justify-center items-center capitalize bg-[#e2e9f6] py-2  w-full ">
        <p className="text-[#468bbe] pr-3">buy now and save 20% off plan</p>
        <span className="font-semibold text-[16px] text-[#002f49]">
          see plans and pricing
        </span>
      </div>
      <div className="flex justify-between items-center gap-5 w-full h-[55px] px-6 bg-[#4b8bbe] ">
        <div className="w-[30%] md:w-[50%]">
          <img src={Logo} alt="" className="md:w-[40%]" />
        </div>
        <div className="md:hidden w-8 h-8 " onClick={handleMenu}>
          <img src={menuIcon} alt="" className="w-8 h-8" />
        </div>

        <div
          className={`absolute top-[56px] right-0 md:top-12  md:h-fit md:right-2   w-full md:w-fit block md:flex items-center ${
            menuOpen ? "block" : "hidden"
          }  bg-[#4b8bbe] `}
        >
          <nav>
            <div className="list-none md:flex justify-around gap-6 px-6 capitalize text-[#f8fbfd] font-semibold text-[16px]">
              <li className="flex items-center py-3 md:py-0">
                <img src={dot} alt="" />
                <Link to="/">home</Link>
              </li>
              <li className="py-3 md:py-0">
                <Link>features</Link>
              </li>
              <li className="py-3 md:py-0">
                <Link>pricing</Link>
              </li>
              <li className="py-3 md:py-0">
                <Link>contact us</Link>
              </li>
            </div>
          </nav>
          <div className="ml-4 py-3 md:py-0">
            <Link className="flex items-center gap-1 text-[#f8fbfd] font-sans capitalize font-semibold text-[16px]">
              log in
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <button className="flex items-center mx-auto my-5 md:my-0 gap-1 px-4 py-1 md:ml-3  font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
            start 30 days free trial
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
