import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="shadow-xl rounded-lg p-8">
      <div>
        <p className="text-info">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </div>
      <div className="flex items-center mt-8">
        <div className="rounded-full ring ring-primary ring-offset-base-150 ring-offset-2">
          <img className="w-12 " src={review.img} alt="" />
        </div>
        <div className="p-2">
          <h2 className="text-neutral">{review.name}</h2>
          <p className="text-info text-sm">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
