import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-dark.png";
import Bus from "../../assets/images/bus-full.png";
import Stars from "../../assets/images/stars.png";

const Footer = () => {
  const footerNavs = [
    {
      label: "Locations",
      items: [
        {
          href: "#",
          name: "Storage Brunswick",
        },
        {
          href: "#",
          name: "Storage Byker",
        },
        {
          href: "#",
          name: "Storage Durham",
        },
        {
          href: "#",
          name: "Storage Killingworth",
        },
        {
          href: "#",
          name: "Storage Morpeth",
        },
        {
          href: "#",
          name: "Storage Washington",
        },
      ],
    },
    {
      label: "About Pay Less",
      items: [
        {
          href: "#",
          name: " Household Storage",
        },
        {
          href: "#",
          name: "Business Self Storage",
        },
        {
          href: "#",
          name: "Self Storage Tips & Ideas",
        },
        {
          href: "#",
          name: "FAQs",
        },
        {
          href: "#",
          name: "Containers for Sale",
        },
        {
          href: "#",
          name: "Containers for Hire",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white ">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-8 max-w-screen-2xl mx-auto px-4 md:px-6 lg:pt-16 py-12 lg:pb-0">
        <div className="hidden lg:flex flex-col justify-between lg:col-span-2">
          <div className="max-w-xs">
            <img src={Logo} className="" alt="Logo" />
          </div>
          <img src={Bus} className="w-[163.97px] h-[83.22px]" alt="Bus" />
        </div>

        {footerNavs.map((item, idx) => (
          <ul className="space-y-2 lg:pb-10" key={idx}>
            <h4 className="text-[#285581] font-bold text-[14px]">
              {item.label}
            </h4>
            {item.items.map((el, idx) => (
              <li key={idx}>
                <Link
                  to={el.href}
                  className="text-[#197FE5] text-[13px] hover:underline"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}

        <div className="flex flex-col gap-2 text-[14px] text-[#285581]">
          <h4 className="font-bold">Contact Us</h4>
          <span>
            <p>Enquiries</p>
            <Link
              to="tel:01917439158"
              className="text-[#197FE5] text-[13px] hover:underline"
            >
              0191 743 9158
            </Link>
          </span>

          <span>
            <p>Support</p>
            <Link
              to="tel:01917439158"
              className="text-[#197FE5] text-[13px] hover:underline"
            >
              0191 743 9158
            </Link>
          </span>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#285581]">
          <h4 className="font-bold">Reviews</h4>
          <span className="space-y-4">
            <img src={Stars} className="" alt="stars" />
            <p>
              <b>4.96</b> rating <b>167</b> reviews
            </p>
            <Link to="#" className="text-[#197FE5] text-[13px] hover:underline">
              See all reviews
            </Link>
          </span>
        </div>

        <div className="flex lg:hidden flex-col justify-between lg:col-span-">
          <div className="max-w-xs">
            <img src={Logo} className="" alt="Logo" />
          </div>
        </div>
      </div>

      <div className="bg-[#2A4D6F] text-white">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-[14px] lg:text-base lg:items-center justify-between max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:h-[56px]">
          <p>
            Pay Less for Storage, 18 Arrow Close, Killingworth, Newcastle Upon
            Tyne, NE12 6QN
          </p>
          <p>Registered Company (0451 5857)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
