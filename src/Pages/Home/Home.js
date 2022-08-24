import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Treatment></Treatment>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
