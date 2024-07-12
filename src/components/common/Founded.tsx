import Vector2 from "../../assets/Vector2";
import Continent from "../../assets/images/continent.png";
import NHS from "../../assets/images/NHS.png";
import Police from "../../assets/images/Northumbria Police.png";

const Founded = () => {
  return (
    <section className="">
      <div className="relative bg-gradient-to-r from-[#4680B9] to-[#386694] w-full max-w-screen-xl mx-auto rounded-[12px] p-[40px] lg:min-h-[569px] place-content-center">
        <div className="flex flex-col gap-6 text-white">
          <h2 className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold max-w-[500px]">
            Pay Less For Storage was{" "}
            <span className="relative">
              founded in 2001
              <Vector2 className="hidden md:absolute md:left-0 top-full -mt-1 md:w-[200px] w-[150px]" />{" "}
            </span>
          </h2>
          <p className="max-w-[469px]">
            Since then we’ve provided storage for large organisations including
            the NHS and Northumbria Police as well as helping hundreds of
            families store their furniture before moving to new homes.
          </p>

          <p className="max-w-[469px]">
            Starting in Killingworth we now have storage sites in Brunswick,
            Morpeth, Washington and Newcastle city centre.
          </p>

          <span className="flex gap-8 items-center">
            <img src={NHS} alt="Bus" className="" />
            <img src={Police} alt="Bus" className="" />
          </span>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <span className="flex flex-col gap-1 border border-[#FFFFFF1A] bg-[#FFFFFF0D] rounded-[6px] hover:scale-[1.02] duration-200 p-[16px] w-full lg:w-[263px]">
              <p className="text-[20px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-bold">
                10,000+
              </p>
              <p className="text-[#FFFFFF99] text-base">Customers</p>
            </span>
            <span className="flex flex-col gap-1 border border-[#FFFFFF1A] bg-[#FFFFFF0D] rounded-[6px] hover:scale-[1.02] duration-200 p-[16px] w-full lg:w-[263px]">
              <p className="text-[20px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-bold">
                18 years
              </p>
              <p className="text-[#FFFFFF99] text-base">Storage experience</p>
            </span>
            <span className="flex flex-col gap-1 border border-[#FFFFFF1A] bg-[#FFFFFF0D] rounded-[6px] hover:scale-[1.02] duration-200 p-[16px] w-full lg:w-[263px]">
              <p className="text-[20px] lg:text-[32px] leading-[32px] lg:leading-[40px] font-bold">
                5 sites
              </p>
              <p className="text-[#FFFFFF99] text-base">
                Across the North East
              </p>
            </span>
          </div>
        </div>

        {/* Bus */}
        <span className="w-max absolute hidden lg:block right-8 top-0 h-full place-content-center">
          <img src={Continent} alt="Bus" className="select-none" />
        </span>
      </div>
    </section>
  );
};

export default Founded;
