import React from "react";
import img from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people3,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center px-12">
        <div>
          <h1 className="text-secondary font-bold text-lg">Testimonial</h1>
          <h1 className="text-neutral text-3xl">What Your Patient Says</h1>
        </div>
        <img className="w-40" src={img} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-24 py-24">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
