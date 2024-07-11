import { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Business", path: "/business" },
    { title: "Household", path: "#" },
    { title: "Containers", path: "#" },
    { title: "Contact Us", path: "#" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#4680B9] to-[#386694] border-b w-full sticky top-0 z-[999] md:border-none">
      <div className="items-center px-4 max-w-screen-2xl mx-auto lg:flex md:px-6">
        <div className="flex items-center justify-between py-4 md:py-[24px] lg:block">
          <Link to="/">
            <img
              src={Logo}
              //   width={120}
              //   height={50}
              alt="Logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-white hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <IoClose className="size-6" />
              ) : (
                <IoMenu className="size-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 absolute lg:relative left-0 px-4 lg:px-0 lg:h-auto h-screen bg-gradient-to-r from-[#4680B9] to-[#386694] w-full lg:w-auto pt-4 lg:pt-0 lg:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white hover:text-[#FFCC80] duration-150 font-semibold w-max lg:w-auto"
                >
                  <Link to={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Link
                  to="#"
                  className="block px-[12px] py-[8px] font-semibold text-center text-white bg-transparent  rounded-[6px] border border-white md:inline-flex gap-4 items-center active:scale-95 duration-200"
                >
                  Call: 01917439158
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex justify-center px-[12px] py-[8px] font-semibold text-center text-[#285581] bg-white  rounded-[6px] border border-[#28558126] md:inline-flex gap-4 items-center active:scale-95 duration-200"
                >
                  Get a quote
                  <FaArrowRightLong className="size-5" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
