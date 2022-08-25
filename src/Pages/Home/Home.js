import React from "react";
import Footer from "../Shared/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
