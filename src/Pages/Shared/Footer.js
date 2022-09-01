import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-cover bg-center footer text-neutral p-10 bg-[url('/src/assets/images/footer.png')]">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center text-info mb-16">
        <p>Copyright ©2022 All Rights Reserved @Shakil Islam.</p>
      </div>
    </div>
  );
};

export default Footer;
