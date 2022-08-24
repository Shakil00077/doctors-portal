import React from "react";

const Services = ({ img, title }) => {
  return (
    <div className="grid justify-items-center shadow-xl p-6 rounded-lg">
      <img src={img} alt="" />
      <h1 className="text-neutral text-xl mt-4 font-bold">{title}</h1>
      <p className="text-black">
        Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
        been the
      </p>
    </div>
  );
};

export default Services;
