import React from "react";
import img from "../../assets/images/doctor.png";

const Appointment = () => {
  return (
    <div className="py-24">
      <div className=" bg-[length:1400px_600px] bg-no-repeat flex justify-center items-center bg-[url('/src/assets/images/appointment.png')]">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={img} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-primary font-bold mb-4">Appointment</h3>
          <h2 className="text-3xl text-white">Make an Appointment Today</h2>
          <p className="text-white py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            earum ab cupiditate autem accusantium expedita sequi, temporibus,
            aut illo doloribus quaerat explicabo, assumenda consectetur est vel
            ad sed maiores doloremque consequatur. Amet consequuntur quibusdam
            autem, quod maxime qui itaque quaerat.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
