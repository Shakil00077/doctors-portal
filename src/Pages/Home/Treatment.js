import React from "react";
import img from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div class="hero min-h-screen px-24">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-24">
          <h1 class="text-5xl font-bold text-neutral">Exceptional Dental</h1>
          <h1 className="text-5xl font-bold text-neutral">
            {" "}
            Care, on Your Terms
          </h1>
          <p class="py-6 text-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum that it has a more-or-less normal distribution
            of letters,as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
