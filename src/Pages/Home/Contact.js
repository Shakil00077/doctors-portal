import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1>Contact Us</h1>
        <h1>Stay Connected With Us</h1>
        <input
          type="text"
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
        <br />
        <textarea class="textarea" placeholder="Bio"></textarea>
      </div>
    </div>
  );
};

export default Contact;
