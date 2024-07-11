import about from "../../assets/images/Mask group (1).png";
import { FaArrowRightLong } from "react-icons/fa6";

const Form = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-10">
      <div className="flex flex-col items-center space-y-3">
        <h2 className="font-bold text-[#285581] text-[20px] ">
          Have questions? Get in touch.
        </h2>
        <p className="text-[#285581]">
          Fill in the form below and our friendly team will respond quickly
        </p>
        <div className="flex space-x-2 items-center border border-gray-200 rounded-md p-2">
          <img src={about} className="" alt="img" />

          <p className="text-[#285581]">Sarah, Customer Lead</p>
        </div>
      </div>
      <form className="md:max-w-lg w-full px-8 pt-4">
        <div className="mb-4">
          <label
            className="block text-[#285581] text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-[#F4F6F9] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#285581] text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-[#F4F6F9] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#285581] text-sm font-semibold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="bg-[#F4F6F9] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-[#285581] text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-[#F4F6F9] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            id="message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-base text-white font-normal flex gap-4 items-center active:scale-95 duration-200 bg-[#4680B9] rounded-[6px] py-[12px] px-[16px] w-max">
            Submit enqiry
            <FaArrowRightLong className="size-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
