import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ArrowRight from "../assets/arrow-right-02-round.svg";
import dot from "../assets/Ellipse 1.svg";
import menu from "../assets/menu.svg";
import cancelMenu from "../assets/cancel menu.svg";
import { useState } from "react";

const Heads = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const items = [
    { tittle: "home", href: "/", pic: dot },
    { tittle: "features", href: "/" },
    { tittle: "pricing", href: "/" },
    { tittle: "contact us", href: "/" },
  ];
  return (
    <div className="wrapper font-sans  h-fit fixed top-0 w-full z-10">
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
        <div className="w-full hidden md:flex items-center  ">
          <div className="w-full flex items-center space-x-8">
            {items.map((item, index) => (
              <div key={index} className="list-none ">
                <nav>
                  <li className="capitalize text-[#f8fbfd] font-medium text-[16px]">
                    <Link to={item.href} className="flex gap-1">
                      <img src={item.pic} alt="" />
                      {item.tittle}
                    </Link>{" "}
                  </li>
                </nav>
              </div>
            ))}
          </div>
          <div className="flex gap-3 w-full ml-10">
            <Link className="flex items-center gap-1 text-[#f8fbfd] font-sans capitalize font-semibold text-[16px]">
              log in
              <img src={ArrowRight} alt="" />
            </Link>
            <button className="flex items-center mx-auto my-5 md:my-0 gap-1 px-4 py-1 md:ml-3  font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
              start 30 days free trial
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <img src={cancelMenu} alt="" /> : <img src={menu} />}
          </button>
        </div>
      </div>
      {openMenu && (
        <div
          onClick={() => {
            setOpenMenu(false);
          }}
          className="w-full top-14 right-0 h-svh flex md:hidden  fixed inset-y-0 bg-black bg-opacity-50 z-40"
        >
          <div className="bg-[#4b8bbe]  fixed inset-y-0 top-[55px] right-0 h-[50%] w-full  z-50 shadow-lg overflow-y-auto">
            <div className="block  flex-1 pt-5 pb-4 ">
              {items.map((item, index) => (
                <div key={index} className="px-6 list-none">
                  <nav>
                    <li className="py-3 capitalize text-[#f8fbfd] font-medium text-[16px] ">
                      <Link to={item.href} className="">
                        {" "}
                        {item.tittle}
                      </Link>
                    </li>
                  </nav>
                </div>
              ))}

              <div className="px-6 pt-5">
                <Link className="flex items-center gap-1 text-[#f8fbfd] font-sans capitalize font-semibold text-[16px]">
                  log in
                  <img src={ArrowRight} alt="" />
                </Link>
                <button className="flex items-center mx-auto mt-8  gap-1 px-4 py-1   font-bold text-[16px] bg-[#002f49] text-[#f8fbfd] rounded-full ">
                  start 30 days free trial
                  <img src={ArrowRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heads;
