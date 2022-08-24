import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Services from "./Services";

const Service = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-secondary text-2xl">Our Services</h1>
      <h2 className="text-neutral text-3xl">Services We Provide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-12">
        <Services title="Fluoride Treatment" img={fluoride}></Services>
        <Services title="Cavity Filling" img={cavity}></Services>
        <Services title="Teeth Whitening" img={whitening}></Services>
      </div>
    </div>
  );
};

export default Service;
