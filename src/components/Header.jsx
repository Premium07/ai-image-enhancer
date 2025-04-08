import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="inline-block">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Enhancer.ai
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          Transform your images with the power of AI
        </p>
      </div>
    </header>
  );
};

export default Header;
