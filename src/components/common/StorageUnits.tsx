import { Link } from "react-router-dom";

import Video from "../../assets/images/business-video.png";
import Container from "../../assets/images/business-container.png";
import Van from "../../assets/images/van.png";
import Padlock from "../../assets/images/padlock.png";
import Camera from "../../assets/images/camera.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaqsCard } from "./FaqsCard";

const StorageUnits = () => {
  const faqsList = [
    {
      q: "Household storage",
      a: "Lorem ipsum dolor sit amet erat consectetuer ipsum rebum amet wisi nonumy duis vero eros dolore elitr dolor et invidunt",
    },
    {
      q: "Business storage",
      a: "Lorem ipsum dolor sit amet erat consectetuer ipsum rebum amet wisi nonumy duis vero eros dolore elitr dolor et invidunt",
    },
  ];

  return (
    <section className="bg-[#FAF8F5]">
      <div className="px-4 md:px-6 py-16 flex flex-col gap-[44px] justify-center items-center max-w-screen-xl mx-auto">
        <h2 className="font-bold text-[20px] lg:text-[32px] leading-[20px] lg:leading-[40px] text-[#285581]">
          Our Killngworth Storage Units
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-white min-h-[696px] border border-[#28558126] p-[40px] flex flex-col gap-[40px] justify-between rounded-[12px] flex-1">
            <span className="flex flex-col gap-2 text-center">
              <p className="text-[#285581] font-bold text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px]">
                20ft Storage Container
              </p>
              <p className="text-[#285581] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px]">
                £135 per month (inc VAT)
              </p>
            </span>
            <span className="place-self-center max-w-[323px]">
              <img src={Container} alt="Container" className="" />
            </span>

            {/* icons */}
            <div className="max-w-[323px] mx-auto flex flex-col gap-[16px] text-[#285581]">
              <span className="flex gap-8 items-center">
                <img src={Van} alt="Van" className="" />
                <p>Car / Van access</p>
              </span>
              <span className="flex gap-8 items-center">
                <img src={Camera} alt="Camera" className="" />
                <p>High security lock</p>
              </span>
              <span className="flex gap-8 items-center">
                <img src={Padlock} alt="Padlock" className="" />
                <p>Very popular – house garage size</p>
              </span>
            </div>

            {/* link */}
            <Link
              to="#"
              className="text-base text-[#285581] font-bold flex gap-4 items-center justify-center active:scale-95 duration-200 bg-gradient-to-r from-[#FFE0B2] to-[#FFCC80] rounded-[6px] py-[12px] px-[16px] border border-[#FFE0B2] w-full"
            >
              Reserve online
              <FaArrowRightLong className="size-4" />
            </Link>
          </div>

          {/* fit */}
          <div className="px-[40px] flex flex-col gap-[40px] flex-1">
            <p className="text-center text-[#285581] font-bold">
              See how much your can fit into this storage unit:
            </p>
            <img src={Video} alt="video" className="" />

            <p className="text-center text-[#285581] font-bold">
              Who stores with us?
            </p>

            <div className="flex flex-col gap-4">
              {faqsList.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorageUnits;
