import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CheckMark from "./CheckMark";
import Stars from "../../assets/images/stars.png";
import Safe from "../../assets/images/safe.png";
import Easy from "../../assets/images/easy.png";
import about from "../../assets/images/Mask group (1).png";

import Affordable from "../../assets/images/affordable.png";
import reviews from "../../assets/images/reviews 1.png";

const Features = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16  flex flex-col">
        <div className=" flex flex-col space-y-7 justify-center items-center">
          <div className="flex items-center w-full justify-between">
            <span>
              <p className="text-[#285581] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px]">
                Why store with us in Killingworth?
              </p>
              <h2 className="font-bold text-[24px] lg:text-[40px] leading-[32px] lg:leading-[56px] text-[#285581]">
                We’re safe, easy & affordable
              </h2>
            </span>

            <Link
              to="#"
              className="text-base text-[#285581] font-bold flex gap-4 items-center active:scale-95 duration-200 bg-gradient-to-r from-[#FFE0B2] to-[#FFCC80] rounded-[6px] py-[12px] px-[16px] border border-[#FFE0B2] w-max"
            >
              Reserve online
              <FaArrowRightLong className="size-5" />
            </Link>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <img src={Safe} alt="Safe" />

              <h3 className="text-[#285581] text-[18px] lg:text-[24px] font-bold leading-[28px] lg:leading-[32px]">
                Safe
              </h3>

              <hr />

              <div className="text-[#285581] flex flex-col gap-[16px]">
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>24 hour CCTV storage</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>10ft steel perimeter ring-fencing</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Heavy duty industrial locks</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Electronic gates control access</p>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <img src={Easy} alt="Easy" />

              <h3 className="text-[#285581] text-[18px] lg:text-[24px] font-bold leading-[28px] lg:leading-[32px]">
                Easy
              </h3>

              <hr />

              <div className="text-[#285581] flex flex-col gap-[16px]">
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>24 hour CCTV storage</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>10ft steel perimeter ring-fencing</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Heavy duty industrial locks</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Electronic gates control access</p>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <img src={Affordable} alt="Affordable" />

              <h3 className="text-[#285581] text-[18px] lg:text-[24px] font-bold leading-[28px] lg:leading-[32px]">
                Affordable
              </h3>

              <hr />

              <div className="text-[#285581] flex flex-col gap-[16px]">
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>24 hour CCTV storage</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>10ft steel perimeter ring-fencing</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Heavy duty industrial locks</p>
                </span>
                <span className="flex gap-4 items-center">
                  <CheckMark />
                  <p>Electronic gates control access</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border bg-[#FAF8F5] relative mt-14">
          <div className="p-10 flex flex-col space-y-3">
            <h2 className="font-bold text-[#285581] md:text-[24px] text-[16px] leading-[31px]">
              Plus, we provide a high quality, personal service
            </h2>
            <p className="text-[#285581] md:text-[20px] text-[16px]">
              With over 50% of our new customers come from recommendations
            </p>
            <div className="flex space-x-2 items-center">
              <img src={about} className="" alt="img" />

              <p>Sarah, Customer Lead</p>
            </div>
            <img src={Stars} className="w-20" alt="stars" />
            <p className="text-[#285581] leading-[24px]">
              4.96 average rating across 167 reviews
            </p>
            <Link to="/" className="text-[#197FE5] underline">
              See all reviews
            </Link>
          </div>
          <img src={reviews} alt="" />
          <div className="absolute  left-12 -top-4">
            <svg
              width="38"
              height="38"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="24"
                fill="url(#paint0_linear_1_6754)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                stroke="#285581"
                stroke-opacity="0.15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.5151 22.5151V15.6H25.4849V22.5151H32.4V25.4849H25.4849V32.4H22.5151V25.4849H15.6V22.5151H22.5151Z"
                fill="#285581"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_6754"
                  x1="0"
                  y1="0"
                  x2="49.7483"
                  y2="1.88604"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE0B3" />
                  <stop offset="1" stop-color="#FFCC80" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
