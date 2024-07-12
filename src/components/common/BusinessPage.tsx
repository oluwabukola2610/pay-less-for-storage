import Map from "../../assets/images/map.png";
import Bus from "../../assets/images/bus.png";
import IVideo from "../../assets/images/Video.png";
import City from "../../assets/images/city.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaqsCard } from "../common/FaqsCard";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import Features from "../common/Features";
import Form from "../common/Form";
import StorageUnits from "../StorageUnits";

const faqsList1 = [
  {
    q: "Do I need to buy my own lock?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "What are the opening hours at the Killingworth site?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Are there any notice periods for giving up my unit?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "How do I reserve a storage unit?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
];

const faqsList2 = [
  {
    q: "Directions from Gosforth",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Directions from Jesmond",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Directions from the A1",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
];
const BusinessPage = () => {
  return (
    <div className="bg-[#FAF8F5]">
      <main className="relative">
        <section className="bg-gradient-to-r from-[#4680B9] to-[#386694] min-h-[407px] sm:min-h-[507px] lg:h-screen relative">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col gap-12 lg:gap-20 justify-center items-center pt-16 md:pt-24 lg:pt-36">
            <span className="flex flex-col gap-3 items-center">
              <h1 className="text-[32px] lg:text-[64px] leading-[48px] lg:leading-[80px] text-white font-bold max-w-[848px] text-center">
                Self Storage Killingworth
              </h1>
              <p className="text-[24px] leading-[32px] text-white hidden lg:block">
                Over 20 years storage experience
              </p>
            </span>

            <Link
              to="#"
              className="text-base lg:text-[24px] text-[#285581] font-bold flex gap-4 items-center active:scale-95 duration-200 bg-gradient-to-r from-[#FFE0B2] to-[#FFCC80] rounded-[6px] py-[16px] px-[24px] border border-[#FFE0B2] w-max z-10"
            >
              Reserve online
              <FaArrowRightLong className="size-5" />
            </Link>
          </div>

          {/* City Image */}
          <div className="absolute bottom-0 w-full flex justify-center">
            <img
              src={City}
              alt="City"
              className="max-w-screen-xl w-full select-none"
              //   max-w-[1145px]
            />
          </div>
        </section>{" "}
        <section className="md:-top-28 relative md:bottom-0 bottom-16 w-full px-4 md:px-0">
          <div className="bg-white border border-[#28558126] rounded-[16px] p-8 max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-[24px] lg:gap-[64px] items-center">
            <span className="cursor-pointer hover:scale-105 duration-200">
              <img src={IVideo} alt="IVideo" />
            </span>

            <span className="text-[#285581] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px] flex flex-col gap-2">
              <h2 className="font-bold">Why pay less for storage?</h2>
              <p className="max-w-[462px]">
                Watch this 2 minute video to learn about our quality storage.
              </p>
            </span>
          </div>
        </section>
      </main>
      <section className="max-w-screen-xl mx-auto p-4 md:px-6  flex flex-col space-y-7 justify-center items-center">
        <h2 className="text-[#285581] text-[24px] lg:text-[40px] leading-[32px] lg:leading-[56px] font-bold text-center">
          About our Killingworth site
        </h2>

        {/* map */}
        <div className=" rounded-[12px]  flex lg:min-w-[472px] ">
          <div className="hidden lg:block">
            <img src={Map} alt="Map" className="rounded-l-[12px]" />
          </div>

          <div className="px-[56px] py-[32px] lg:px-[64px] lg:py-[32px] text-[#285581] flex flex-col gap-8 bg-white shadow">
            <div>
              <span className="flex gap-4 items-center">
                <IoLocationOutline className="size-5" />
                <p className="font-bold">Address:</p>
              </span>
              <span className="flex flex-col gap-2 ml-9">
                <Link
                  to=""
                  className="text-[24px] leading-[32px] text-[#197FE5] underline max-w-[371px]"
                >
                  Littleburn Rd, Langley Moor, Durham, DH7 8XD
                </Link>
                <p>2 minutes from the A167</p>
                <p>8 minutes away from Durham City Centre</p>
              </span>
            </div>

            <div>
              <span className="flex gap-4 items-center">
                <LuPhone className="size-5" />
                <p className="font-bold">Phone:</p>
              </span>
              <span className="flex flex-col gap-2 ml-9">
                <Link to="tel:01913006565" className="text-[#197FE5] underline">
                  0191 300 65 65
                </Link>
              </span>
            </div>

            <div>
              <span className="flex gap-4 items-center">
                <MdOutlineMailOutline className="size-5" />
                <p className="font-bold">Email:</p>
              </span>
              <span className="flex flex-col gap-2 ml-9">
                <Link
                  to="mailto:info@paylessforstorage.co.uk"
                  className="text-[#197FE5] underline"
                >
                  info@paylessforstorage.co.uk
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* FAQs grid */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* FAQs1 */}
          <div className="flex flex-col gap-6">
            <p className="text-[#285581] font-bold text-center">
              FAQs on our Killingworth Storage Units
            </p>
            <div className="flex flex-col gap-4">
              {faqsList1.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>

          {/* FAQs2 */}
          <div className="flex flex-col gap-6">
            <p className="text-[#285581] font-bold text-center">
              How to get to our Killingworth storage location
            </p>
            <div className="flex flex-col gap-4">
              {faqsList2.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Book Online */}
        <div className="relative bg-gradient-to-r from-[#4680B9] to-[#386694] w-full max-w-screen-lg mx-auto rounded-[12px] p-[40px] min-h-[248px]">
          <div className="flex flex-col gap-6 items-center max-w-[464px] mx-auto text-white text-center">
            <h2 className="text-[24px] leading-[32px] font-bold">
              Book online. Get access right away.
            </h2>
            <p className="">
              Reserve online, setup payment & move into your storage unit. We’ll
              show you our storage prices and availability.
            </p>

            <Link
              to="#"
              className="text-base text-white font-bold flex gap-4 items-center active:scale-95 duration-200 bg-transparent rounded-[6px] py-[8px] px-[12px] border border-white w-max"
            >
              Reserve online
              <FaArrowRightLong className="size-5" />
            </Link>
          </div>

          {/* Bus */}
          <span className="w-max absolute hidden lg:block left-0 top-0 h-full place-content-center">
            <img src={Bus} alt="Bus" className="select-none" />
          </span>
        </div>
      </section>
      <div className="w-full border border-gray-200" />
      {/* Features */}
      <Features />
      {/* StorageUnits */}
      <StorageUnits />
      <div className="w-full border border-gray-200" />
      <div className=" flex flex-col spacey-6 bg-gradient-to-b from-[#ffffff] to-[#f6f2f2]">
        <Form />
        <Rating title="A Killingworth self storage location rated" />
      </div>{" "}
      <div className="w-full border border-gray-200" />
    </div>
  );
};

export default BusinessPage;
