import React from "react";

const Footer = () => {
  return (
    <footer className="text-lg text-gray-500">
      {/* <p>Created with ❤️ by Prem Sagar Gupta.</p> */}
      <p className="text-sm mt-10">
        © {new Date().getFullYear()} Enhancer.ai - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
