import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="py-16 text-center bg-[url('/src/assets/images/appointment.png')]">
        <h1 className="text-secondary text-xl">Contact Us</h1>
        <h1 className="text-white text-2xl mb-8">Stay Connected With Us</h1>
        <div>
          <input
            type="text"
            placeholder="Email address"
            class="input input-bordered input-sm w-full max-w-xs"
          />
        </div>

        <div className="mt-4 mb-4">
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div>
          <textarea class="textarea" placeholder="Your message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
