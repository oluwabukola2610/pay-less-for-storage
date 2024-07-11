import { Link } from "react-router-dom";
import Stars from "../../assets/images/stars.png";

const Rating = ( {title}:{title:string}) => {
  // Example review data
  const reviews = [
    {
      id: 1,
      author: "Susie",
      content:
        "Friendly and helpful team and super easy service. Price was the best I could find and no set periods of use, which was exactly what we needed. Would absolutely recommend and use again.",
    },
    {
      id: 2,
      author: "Chris Wandless",
      content:
        "All staff I have dealt with have been friendly and helpful. Staff both on site and on the telephone have been polite, courteous and helpful. Excellent customer service throughout.",
    },
    {
      id: 3,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 4,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 5,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 6,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 7,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 8,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
    {
      id: 9,
      author: "Michael Goble",
      content:
        "Thoroughly recommend this storage company, containers are excellent and value for money, easy access 24/7... and Sarah and Andrew were always so pleasant to deal with.",
    },
  ];

  return (

      <section className="max-w-screen-xl mx-auto px-4 md:px-6 py-16 flex flex-col  items-center  space-y-8">
        <h2 className="md:text-[40px] text-[26px] text-[#285581]  text-center">
          {title} <br />{" "}
          <span className="font-bold leading-[56px] ">5 stars </span>
          by our customers
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col space-y-3 p-3 bg-white/60 rounded-md border border-gray-300  "
            >
              <span className="flex space-x-3 items-center">
                <h1 className="font-bold text-[#285581]">{review.author}</h1>
                <img src={Stars} className="" alt="stars" />
              </span>
              <p className="text-[#285581] font-normal text-[14px] leading-[20px]">
                {review.content}
              </p>
            </div>
          ))}
        </div>
        <div className="font-normal leading-[32px] md:text-[24px] text-[16px] text-[#285581] ">
          <span className="font-bold">4.96</span> average rating across{" "}
          <span className="font-bold">167</span> reviews{" "}
          <Link to="/" className="text-[#197FE5] underline">
            See all reviews
          </Link>
        </div>
      </section>
  );
};

export default Rating;
