import { FaArrowRightLong } from "react-icons/fa6";
import City from "../../assets/images/city.png";
import about from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Vector from "../../assets/Vector";
import HomeSvg from "../../assets/HomeSvg";
import Business from "../../assets/Business";
import Features from "../common/Features";
import Stars from "../../assets/images/stars.png";
import Rating from "../common/Rating";

const HomePage = () => {
  return (
    <div className="bg-[#FAF8F5]">
      <main className="relative">
        <section className="bg-gradient-to-r from-[#4680B9] to-[#386694] min-h-[407px] sm:min-h-[507px] lg:h-screen relative">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col gap-12 lg:gap-20 pt-16 md:pt-20">
            <h1 className="text-[32px] lg:text-[64px] leading-[48px] lg:leading-[80px] text-white font-bold">
              Self Storage <br className="hidden lg:block" />
              Newcastle & the North East
            </h1>

            <Link
              to="/"
              className="text-base lg:text-[24px] text-[#285581] font-bold flex gap-4 items-center active:scale-95 duration-200 bg-gradient-to-r from-[#FFE0B2] to-[#FFCC80] rounded-[6px] py-[16px] px-[24px] border border-[#FFE0B2] w-max  z-10"
            >
              Get a quote
              <FaArrowRightLong className="size-5" />
            </Link>
          </div>

          {/* City Image */}
          <div className="absolute bottom-0 w-full flex justify-center">
            <img
              src={City}
              alt="City"
              className="max-w-screen-xl w-full select-none"
            />
          </div>
        </section>
        <section className="md:bottom-0 md:relative absolute -bottom-36 w-full px-4 md:px-0">
          <div className="bg-white border border-[#28558126] rounded-[16px] p-8 max-w-screen-xl mx-auto items-center flex flex-col space-y-4 ">
            <div className="flex items-center justify-center w-full space-x-3">
              <div className="border border-gray-100 w-full" />
              <h4 className="min-w-fit font-bold text-primary md:leading-[32px] text-[18px] leading-[28px] md:text-[24px]">
                Search our locations
              </h4>
              <div className="border border-gray-100 w-full" />
            </div>
            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="Search locations by postcode "
                className=" p-3 rounded-lg w-full bg-[#F4F6F9] placeholder-shown:text-[#285581] placeholder:text-sm placeholder:leading-[24px]"
              />
              <button
                className=" text-[#fff] font-semibold leading-[24px] md:w-[260px] flex gap-[12px] items-center
              active:scale-95 duration-200 bg-primary rounded-[6px] p-[6px]  justify-center text-sm"
              >
                Search
                <BiSearch className="size-4" />
              </button>{" "}
            </div>
            <div className="flex items-center justify-center w-full space-x-3">
              <div className="border border-gray-100 w-full" />
              <h4 className="min-w-fit font-bold text-primary md:leading-[32px] text-[16px]">
                Or find by town
              </h4>
              <div className="border border-gray-100 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4 w-full">
              {[
                "Morecambe",
                "Durham",
                "Penrith",
                "Killingworth",
                "Brunswick",
                "Byker",
                "Morpeth",
                "Washington",
              ].map((town) => (
                <button
                  key={town}
                  className="text-primary text-sm font-bold flex gap-4 justify-center items-center rounded-[6px] p-3 w-full border border-borderGray2"
                >
                  {town} <FaArrowRightLong className="size-3" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-16  flex flex-col space-y-7">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="flex flex-col space-y-3 items-start w-full md:max-w-[690px]">
            <h2 className="md:text-[40px] text-[26px] text-[#285581] relative">
              We’re a{" "}
              <span className="font-bold leading-[56px] relative ">
                family-run
                <Vector className="absolute left-0 top-full -mt-1 md:w-[200px] w-[150px]" />{" "}
              </span>{" "}
              North East self storage company that’s rated{" "}
              <span className="font-bold leading-[56px]">5 stars</span> by our
              loyal customers
            </h2>
            <div className="font-[100] text-[#285581]/30 leading-[32px] md:text-[24px] text-[20px]">
              * Without the High Prices of National Chains
            </div>
          </div>
          <img src={about} alt="about" />
        </div>
        <div className="grid gap-5 md:grid-cols-3 items-start">
          <div className="flex flex-col space-y-3 p-3 bg-white/60 rounded-md border border-gray-300 ">
            <span className="flex space-x-3 items-center">
              <h1 className="font-bold text-[#285581]">Susie</h1>
              <img src={Stars} className="" alt="stars" />
            </span>
            <p className="text-[#285581] font-normal text-[14px] leading-[20px]">
              Friendly and helpful team and super easy service. Price was the
              best I could find and no set periods of use, which was exactly
              what we needed. Would absolutely recommend and use again.
            </p>
          </div>
          <div className="flex flex-col space-y-3 p-3 bg-white/60 rounded-md border border-gray-300  ">
            <span className="flex space-x-3 items-center">
              <h1 className="font-bold text-[#285581]">Chris Wandless</h1>
              <img src={Stars} className="" alt="stars" />
            </span>
            <p className="text-[#285581] font-normal text-[14px] leading-[20px]">
              All staff I have dealt with have been friendly and helpful. Staff
              both on site and on the telephone have been polite, courteous and
              helpful. Excellent customer service throughout.
            </p>
          </div>
          <div className="flex flex-col space-y-3 p-3 bg-white/60 rounded-md border border-gray-300  ">
            <span className="flex space-x-3 items-center">
              <h1 className="font-bold text-[#285581]">Michael Goble</h1>
              <img src={Stars} className="" alt="stars" />
            </span>
            <p className="text-[#285581] font-normal text-[14px] leading-[20px]">
              Thoroughly recommend this storage company, containers are
              excellent and value for money, easy access 24/7... and Sarah and
              Andrew were always so pleasant to deal with.
            </p>
          </div>
        </div>
        <div className="font-normal leading-[32px] md:text-[24px] text-[16px] text-[#285581] ">
          <span className="font-bold">4.96</span> average rating across{" "}
          <span className="font-bold">167</span> reviews{" "}
          <Link to="/" className="text-[#197FE5] underline">
            See all reviews
          </Link>
        </div>
      </section>{" "}
      <div className="w-full border border-gray-200" />
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-16  flex flex-col space-y-7 justify-center items-center">
        <h2 className="md:text-[40px] text-[24px] text-[#285581] leading-[32px] font-bold relative">
          I’m looking for{" "}
          <Vector className="absolute left-12 top-full -mt-1 md:w-[150px] w-[130px]" />{" "}
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="bg-white p-4 rounded-md flex flex-col items-center border border-gray-200  w-full space-y-3">
            <HomeSvg />
            <h4 className="font-bold text-[#285581] md:text-[20px] text-[18px] leading-[32px] inline-flex gap-3 items-center">
              House storage
              <FaArrowRightLong size={20} />
            </h4>
          </div>
          <div className="bg-white p-4 rounded-md flex flex-col items-center border border-gray-200  w-full space-y-3">
            <Business />
            <h4 className="font-bold text-[#285581] md:text-[20px] text-[18px] leading-[32px] inline-flex gap-3 items-center">
              Business storage
              <FaArrowRightLong size={20} />
            </h4>
          </div>
        </div>
      </section>
      <Features />
      <div className="w-full border border-gray-200" />
      <div className="bg-white flex flex-col spacey-6">
      <Rating title="Self storage rated" />

      </div>
      <div className="w-full border border-gray-200" />
    </div>
  );
};

export default HomePage;
