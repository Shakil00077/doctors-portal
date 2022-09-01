import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-xl text-secondary text-center">{name}</h2>
        <p className="text-center text-info">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p className="text-center text-info text-sm">
          {slots.length} {slots.length <= 1 ? "space" : "spaces"} available
        </p>
        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white text-uppercase"
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
