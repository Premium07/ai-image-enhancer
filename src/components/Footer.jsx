import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 mt-16 w-full">
      <div className="flex items-center px-28 justify-between text-gray-400 gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Enhancer.ai - All rights reserved.{" "}
          <span className="text-gray-500">Made with ❤️ by PremSG</span>
        </p>
        <Link
          to="https://github.com/Premium07"
          className="p-2 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
